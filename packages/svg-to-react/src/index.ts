import fs from 'fs';

import xml2js from 'xml2js';

const titleCase = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

const camelCase = (text: string, separator = ' ') =>
  text
    .split(separator)
    .map((word, key) => {
      if (key === 0) {
        return word;
      }

      return titleCase(word);
    })
    .join('');

interface IconEntity {
  name: string;
  category: string;
  jsx: string;

  init(): void;
}

class Icon implements IconEntity {
  private readonly _category: string;
  private readonly _name: string;
  private readonly path: string;
  private viewBox: string = '';
  private svg: string = '';
  constructor(root: string, file: string) {
    const [name, category] = file.replace('.svg', '').split(', ');

    this.path = `${root}/${file}`;
    this._name = name.replace('Name=', '');
    this._category = category.replace('Category=', '');
  }

  public async init() {
    await this.readFile();
  }

  private async readFile() {
    console.info(`Transform in progress: [${this._category}] -> ${this._name}`);
    const file = await fs.promises.readFile(this.path, 'utf8');

    const data = await xml2js.parseStringPromise(file, {
      explicitArray: false,
      attrNameProcessors: [name => camelCase(name, '-')],
      attrValueProcessors: [(value, name) => (name === 'fill' ? '{fill}' : value)],
    });

    this.viewBox = data.svg.$.viewBox;

    const builder = new xml2js.Builder({
      headless: true,
    });

    const icon = builder.buildObject({
      g: {
        ...data.svg,
        $: {},
      },
    });

    this.svg = icon.split('fill="{fill}"').join('fill={fill}');
  }

  public get name(): string {
    return this._name;
  }

  public get category(): string {
    return this._category;
  }

  public get jsx(): string {
    return `  '${this.name}': {\n    viewBox: '${this.viewBox}',\n    svg: (fill) => (\n${this.svg}\n    )\n  }`;
  }
}

interface CategoryEntity {
  addIcon(icon: Icon): void;
  createFile(outputFolder: string): void;
}

export class Category implements CategoryEntity {
  private icons: Array<Icon>;
  readonly name: string;

  constructor(name: string) {
    this.icons = [];
    this.name = name;
  }

  public addIcon(icon: Icon) {
    this.icons.push(icon);
  }

  public async createFile(outputFolder: string) {
    const fileName = `${this.name}.tsx`;
    console.log(`Creating file: ${outputFolder}/${fileName}`);

    await Promise.all(this.icons.map(icon => icon.init()));

    const types = this.icons.map(icon => `'${icon.name}'`).join(' | ');
    const categoryTitleCase = titleCase(this.name);
    const categoryType = `export type ${categoryTitleCase}IconsT = Record<${types}, IconT>;`;
    const categoryObject = `export const ${categoryTitleCase}Icons: ${categoryTitleCase}IconsT`;
    const iconsRendered = this.icons.map(icon => icon.jsx).join(',\n');

    const data = `import { IconT } from '.';

${categoryType}

${categoryObject} = {
${iconsRendered}
};
  `;

    fs.writeFileSync(`${outputFolder}/${fileName}`, data);
  }
}

// ---------------------------------------------------------------------------------------------------------------------

type ConfigFile = {
  rootSVGDirectory: string;
  outputDirectory: string;
};

const configFile = fs.readFileSync('svgconfig.json', 'utf8');
const config: ConfigFile = JSON.parse(configFile);

const icons: Array<Icon> = fs
  .readdirSync(config.rootSVGDirectory)
  .filter(file => file.endsWith('.svg'))
  .map<Icon>(file => new Icon(config.rootSVGDirectory, file));

type IconCategories = {
  [index: string]: Category;
};

const categoryFiles = icons.reduce<IconCategories>((categories, icon) => {
  categories[icon.category] = categories[icon.category] ?? new Category(icon.category);
  categories[icon.category].addIcon(icon);

  return categories;
}, {});

Object.values(categoryFiles).forEach(async category => {
  await category.createFile(config.outputDirectory);
});

console.log(`Creating file: ${config.outputDirectory}/index.ts`);

const indexFile = `import React from 'react';
${Object.keys(categoryFiles)
  .map(category => `import { ${titleCase(category)}Icons, ${titleCase(category)}IconsT } from './${category}';`)
  .join('\n')}\n
export type IconT = {
  viewBox: string;
  svg: (fill: string) => React.ReactNode;
};\n
export type IconCollectionT = ${Object.keys(categoryFiles)
  .map(category => `${titleCase(category)}IconsT`)
  .join(' & ')};\n
export const Icons: IconCollectionT = {\n${Object.keys(categoryFiles)
  .map(category => `  ...${titleCase(category)}Icons,`)
  .join('\n')}\n};`;

fs.writeFileSync(`${config.outputDirectory}/index.ts`, indexFile);

console.info("SVG's transformed! :D");
