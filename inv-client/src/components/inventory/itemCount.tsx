import React, { useEffect, useState } from "react";

interface ItemCountProps {
    totalCount: number;
}

const ItemCount: React.FC<ItemCountProps> = ({ totalCount }) => {
    const [itemsAnimationCount, setItemsAnimationCount] = useState<number>(0);

    useEffect(() => {
        if (itemsAnimationCount < totalCount) {
            delay(13).then(() => setItemsAnimationCount(itemsAnimationCount + 1));
        }
    }, [itemsAnimationCount]);

    useEffect(() => {
        setItemsAnimationCount(0)
    }, [totalCount]);

    async function delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return <>({itemsAnimationCount} items)</>;
};

export default ItemCount;
