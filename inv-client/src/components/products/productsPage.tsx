import React from 'react';
import Product from './product';

interface ProductProps {
    name: string;
    price: number;
    description: string;
    imgSrc: string;
    quantity: number;
}

const mockData = [
    {
        id: 1,
        name: "Product 1",
        price: 10.99,
        description: "This is product 1",
        image: "https://via.placeholder.com/150",
        quantity: 10
    },
    {
        id: 2,
        name: "Product 2",
        price: 15.99,
        description: "This is product 2",
        image: "https://via.placeholder.com/150",
        quantity: 5
    },
    {
        id: 3,
        name: "Product 3",
        price: 20.99,
        description: "This is product 3",
        image: "https://via.placeholder.com/150",
        quantity: 3
    },
    {
        id: 4,
        name: "Product 4",
        price: 5.99,
        description: "This is product 4",
        image: "https://via.placeholder.com/150",
        quantity: 7
    },
    {
        id: 5,
        name: "Product 5",
        price: 12.99,
        description: "This is product 5",
        image: "https://via.placeholder.com/150",
        quantity: 2
    }
];


const ProductsPage: React.FC<{}> = () => {
    return (
        <div className="products-page">
            <h2>Products</h2>
            <div className='products'>
                {mockData.map(product => (

                    <Product key={product.id} name={product.name} price={product.price} description={product.description} imgSrc={product.image} quantity={product.quantity} />
                ))}
            </div>
        </div>
    );
}

export default ProductsPage;