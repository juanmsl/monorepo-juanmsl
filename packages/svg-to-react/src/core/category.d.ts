import { Icon } from "./icon";
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
//# sourceMappingURL=category.d.ts.map