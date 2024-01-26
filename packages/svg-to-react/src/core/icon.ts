import fs from "fs";
import xml2js from "xml2js";
import {camelCase} from "../helpers";

interface IconEntity {
  name: string;
  category: string;
  jsx: string;

  init(): void;
}


export class Icon implements IconEntity {
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
