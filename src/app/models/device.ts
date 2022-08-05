import { Category } from "./category";

export interface Device {
    id: number | undefined;
    category: Category | undefined;
    color: string;
    partNumber: number;
    categoryId: number;
}
