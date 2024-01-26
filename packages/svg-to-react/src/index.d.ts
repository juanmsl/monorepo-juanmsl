export declare const titleCase: (text: string) => string;
export declare const camelCase: (text: string, separator?: string) => string;
interface IconEntity {
    name: string;
    category: string;
    jsx: string;
    init(): void;
}
export declare class Icon implements IconEntity {
    private readonly _category;
    private readonly _name;
    private readonly path;
    private viewBox;
    private svg;
    constructor(root: string, file: string);
    init(): Promise<void>;
    private readFile;
    get name(): string;
    get category(): string;
    get jsx(): string;
}
interface CategoryEntity {
    addIcon(icon: Icon): void;
    createFile(outputFolder: string): void;
}
export declare class Category implements CategoryEntity {
    private icons;
    readonly name: string;
    constructor(name: string);
    addIcon(icon: Icon): void;
    createFile(outputFolder: string): Promise<void>;
}
export {};
//# sourceMappingURL=index.d.ts.map