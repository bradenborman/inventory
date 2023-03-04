import React from 'react';
import { iInventoryItem } from '../../models/inventoryItem';

export interface InventoryItemProps extends iInventoryItem {
    delayAmount: number;
    handleClick: (e: any) => void;
}

const InventoryItem: React.FC<InventoryItemProps> = ({
    name,
    quantity,
    price,
    description,
    tags,
    image,
    delayAmount,
    handleClick
}) => {

    const delay = delayAmount * 0.1 + 0.1;

    const style: React.CSSProperties = {
        animationDelay: `${delay}s`
    }


    return (
        <div className="inventory-item" onClick={handleClick} style={style}>
            <div className="inventory-item__header" />
            <div className="inventory-item__details">
                <div className="inventory-item__name">{name}</div>
                <div className="inventory-item__price">Price: ${price.toFixed(2)}</div>
                <div className="inventory-item__quantity">Quantity: {quantity}</div>
                <img loading="lazy" src={image} alt={name} className="inventory-item__image" />
                <div className="inventory-item__description">{description}</div>
                {tags && (
                    <div className="inventory-item__tags">
                        Tags: {tags.join(', ')}
                    </div>
                )}
            </div>
        </div>
    );
};

export default InventoryItem;
