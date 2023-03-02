import React from 'react';

interface ProductProps {
    name: string;
    price: number;
    description: string;
    imgSrc: string;
    quantity: number;
}

const Product: React.FC<ProductProps> = ({ name, price, description, imgSrc, quantity }) => {
    return (
        <div className="product">
            <img className="product-image" src={imgSrc} alt={`${name} image`} />
            <div className="product-info">
                <h2>{name}</h2>
                <p>{description}</p>
                <p>Price: ${price.toFixed(2)}</p>
                <p>Quantity: {quantity}</p>
            </div>
        </div>
    );
};


export default Product;