import React from 'react';
import { iInventoryItem } from '../../models/inventoryItem';
import './InventoryItem.scss';

export interface InventoryItemProps extends iInventoryItem {
    handleClick: (e: any) => void;
}

const InventoryItem: React.FC<InventoryItemProps> = ({
    name,
    quantity,
    price,
    description,
    tags,
    image,
    handleClick
}) => {
    return (
        <div className="inventory-item" onClick={handleClick}>
            <div className="inventory-item__header" />
            <div className="inventory-item__details">
                <div className="inventory-item__name">{name}</div>
                <div className="inventory-item__price">Price: ${price.toFixed(2)}</div>
                <div className="inventory-item__quantity">Quantity: {quantity}</div>
                <img src={image} alt={name} className="inventory-item__image" />
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
