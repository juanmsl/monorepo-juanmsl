import { titleCase } from "../helpers";
import fs from "fs";
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
//# sourceMappingURL=category.js.map