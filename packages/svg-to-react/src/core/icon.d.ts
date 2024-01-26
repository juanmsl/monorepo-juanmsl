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
export {};
//# sourceMappingURL=icon.d.ts.map