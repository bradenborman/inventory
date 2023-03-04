import { SortOrder } from "../components/inventory/inventory";
import { iInventoryItem } from "../models/inventoryItem";

export const sort = (order: string, a: iInventoryItem, b: iInventoryItem): number => {
    return order === SortOrder.ASCENDING ? sortByAcending(a, b) : sortByPriceDescending(a, b);

}

const sortByAcending = (a: iInventoryItem, b: iInventoryItem): number => {
    return b.price - a.price
}

const sortByPriceDescending = (a: iInventoryItem, b: iInventoryItem): number => {
    return a.price - b.price
}