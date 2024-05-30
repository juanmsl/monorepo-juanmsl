import fs from 'fs';
import xml2js from 'xml2js';
import { camelCase } from '../helpers';

interface IconEntity {
  name: string | null;
  category: string | null;
  jsx: string;
  isValid: boolean;

  init(): void;
}

export class Icon implements IconEntity {
  private readonly _category: string | null;
  private readonly _name: string | null;
  private readonly path: string;
  private viewBox: string = "";
  private svg: string = "";
  constructor(root: string, file: string) {
    const items = file.replace(".svg", "").split(", ");

    const mappedValues = items.reduce(
      (prev, item) => {
        const [label, value] = item.split("=");

        return {
          ...prev,
          [label.toLowerCase()]: value,
        };
      },
      {
        name: null,
        category: null,
      },
    );
    this.path = `${root}/${file}`;
    this._name = mappedValues.name;
    this._category = mappedValues.category;
  }

  public async init() {
    if (this.isValid) {
      return await this.readFile();
    }

    Promise.reject(new Error("Icon without name or category or both"));
  }

  private async readFile() {
    console.info(`Transform in progress: [${this._category}] -> ${this._name}`);
    const file = await fs.promises.readFile(this.path, "utf8");

    const data = await xml2js.parseStringPromise(file, {
      explicitArray: false,
      attrNameProcessors: [name => camelCase(name, "-")],
      attrValueProcessors: [
        (value, name) => (name === "fill" ? "{fill}" : value),
      ],
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

    this.svg = icon.split('fill="{fill}"').join("fill={fill}");
  }

  public get isValid(): boolean {
    return Boolean(this._name && this._category);
  }

  public get name(): string | null {
    return this._name;
  }

  public get category(): string | null {
    return this._category;
  }

  public get jsx(): string {
    return `  '${this.name}': {\n    viewBox: '${this.viewBox}',\n    svg: (fill) => (\n${this.svg}\n    )\n  }`;
  }
}
