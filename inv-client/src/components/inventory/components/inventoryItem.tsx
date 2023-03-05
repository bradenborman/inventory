import classNames from 'classnames';
import React, { useRef } from 'react';
import { iInventoryItem } from '../../../models/inventoryItem';

export interface InventoryItemProps extends iInventoryItem {
    tabindex: number;
    spotlighted: boolean;
    delayAmount: number;
    handleClick: (e: any) => void;
}

const InventoryItem: React.FC<InventoryItemProps> = ({
    spotlighted,
    tabindex,
    name,
    quantity,
    price,
    description,
    tags,
    image,
    delayAmount,
    handleClick
}) => {

    const myComponentRef = useRef(null);

    const handleFocus = (event: any) => {
        const focusedDiv = event.target;
        const handleKeyPress = (event: any) => {
            if (event.key === 'Enter') {
                myComponentRef.current.click();
            }
        };

        focusedDiv.addEventListener('keydown', handleKeyPress);

        const handleBlur = () => {
            focusedDiv.removeEventListener('keydown', handleKeyPress);
        };

        focusedDiv.addEventListener('blur', handleBlur);
    };


    const delay = delayAmount * 0.1 + 0.1;
    const style: React.CSSProperties = {
        animationDelay: `${delay}s`
    }

    return (
        <div className={classNames("inventory-item", { "spotlighted": spotlighted })} onClick={handleClick} style={style} tabIndex={tabindex} onFocus={handleFocus} ref={myComponentRef}>
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
