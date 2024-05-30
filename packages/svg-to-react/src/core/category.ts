import { Icon } from './icon';
import { titleCase } from '../helpers';
import fs from 'fs';

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
    if (icon.isValid) {
      this.icons.push(icon);
    }
  }

  public async createFile(outputFolder: string) {
    const fileName = `${this.name}.tsx`;
    console.log('');
    console.log(`Category: ${this.name}`);
    console.log(`Icons: ${this.icons.length}`);
    console.log(`File: ${outputFolder}/${fileName}`);

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
