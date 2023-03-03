import { iInventoryItem } from "../models/inventoryItem";

export const movePokemonEntriesToBottom = (a: iInventoryItem, b: iInventoryItem) => {
    if (a.tags.includes("Pokemon") && !b.tags.includes("Pokemon")) {
        return 1;
    } else if (!a.tags.includes("Pokemon") && b.tags.includes("Pokemon")) {
        return -1;
    } else {
        return 0;
    }
}