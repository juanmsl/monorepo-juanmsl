import fs from 'fs';
import xml2js from "xml2js";
export const titleCase = (text) => text.charAt(0).toUpperCase() + text.slice(1);
export const camelCase = (text, separator = ' ') => text.split(separator).map((word, key) => {
    if (key === 0) {
        return word;
    }
    return titleCase(word);
}).join('');
export class Icon {
    _category;
    _name;
    path;
    viewBox = '';
    svg = '';
    constructor(root, file) {
        const [name, category] = file.replace('.svg', '').split(', ');
        this.path = `${root}/${file}`;
        this._name = name.replace('Name=', '');
        this._category = category.replace('Category=', '');
    }
    async init() {
        await this.readFile();
    }
    async readFile() {
        console.info(`Transform in progress: [${this._category}] -> ${this._name}`);
        const file = await fs.promises.readFile(this.path, 'utf8');
        const data = await xml2js.parseStringPromise(file, {
            explicitArray: false,
            attrNameProcessors: [name => camelCase(name, '-')],
            attrValueProcessors: [(value, name) => name === 'fill' ? '{fill}' : value]
        });
        this.viewBox = data.svg.$.viewBox;
        const builder = new xml2js.Builder({
            headless: true,
        });
        const icon = builder.buildObject({
            g: {
                ...data.svg,
                '$': {}
            }
        });
        this.svg = icon.split('fill="{fill}"').join('fill={fill}');
    }
    get name() {
        return this._name;
    }
    get category() {
        return this._category;
    }
    get jsx() {
        return `  '${this.name}': {\n    viewBox: '${this.viewBox}',\n    svg: (fill) => (\n${this.svg}\n    )\n  }`;
    }
}
export class Category {
    icons;
    name;
    constructor(name) {
        this.icons = [];
        this.name = name;
    }
    addIcon(icon) {
        this.icons.push(icon);
    }
    async createFile(outputFolder) {
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
const configFile = fs.readFileSync('svgconfig.json', "utf8");
const config = JSON.parse(configFile);
const icons = fs
    .readdirSync(config.rootSVGDirectory)
    .filter(file => file.endsWith('.svg'))
    .map(file => new Icon(config.rootSVGDirectory, file));
const categoryFiles = icons.reduce((categories, icon) => {
    categories[icon.category] = categories[icon.category] ?? new Category(icon.category);
    categories[icon.category].addIcon(icon);
    return categories;
}, {});
Object.values(categoryFiles).forEach(async (category) => {
    await category.createFile(config.outputDirectory);
});
console.log(`Creating file: ${config.outputDirectory}/index.ts`);
const indexFile = `import React from 'react';
${Object.keys(categoryFiles).map((category) => `import { ${titleCase(category)}Icons, ${titleCase(category)}IconsT } from './${category}';`).join('\n')}\n
export type IconT = {
  viewBox: string;
  svg: (fill: string) => React.ReactNode;
};\n
export type IconCollectionT = ${Object.keys(categoryFiles).map(category => `${titleCase(category)}IconsT`).join(' & ')};\n
export const Icons: IconCollectionT = {\n${Object.keys(categoryFiles).map((category) => `  ...${titleCase(category)}Icons,`).join('\n')}\n};`;
fs.writeFileSync(`${config.outputDirectory}/index.ts`, indexFile);
console.info('SVG\'s transformed! :D');
//# sourceMappingURL=index.js.map