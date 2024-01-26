import fs from "fs";
import xml2js from "xml2js";
import { camelCase } from "../helpers";
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
//# sourceMappingURL=icon.js.map