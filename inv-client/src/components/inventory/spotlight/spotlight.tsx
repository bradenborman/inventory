import React from 'react';
import { iInventoryItem } from '../../../models/inventoryItem';

export interface SpotlightItemProps extends iInventoryItem {
    onClose: (e: any) => void;
}

const Spotlight: React.FC<SpotlightItemProps> = ({
    name,
    quantity,
    price,
    description,
    tags,
    image,
    onClose,
}) => {
    return (
        <div className="spotlight">
            <div className="spotlight__close">
                <button onClick={onClose}>
                    X
                </button>
            </div>
            <div className='spotlight__content'>
                <h2>{name}</h2>
                <p className='price'> ${price}</p>
                <img src={image} alt={name} />
                <p className='description'>{description}</p>
                <ul>
                    {tags.map(tag => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul>

            </div>
        </div>
    );
};

export default Spotlight;