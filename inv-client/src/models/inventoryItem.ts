export interface iInventoryItem {
    name: string;
    quantity: number;
    price: number;
    description: string;
    tags?: string[];
    image?: string;
}