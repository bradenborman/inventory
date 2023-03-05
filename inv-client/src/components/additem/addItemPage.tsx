import React, { useState } from "react";
import { Link } from "react-router-dom";


type ItemData = {
    name: string;
    description: string;
    price: number;
    quantity: number;
    image?: File;
    tags: string[];
    subtags: string[];
};

const AddItemPage: React.FC = () => {
    const [itemData, setItemData] = useState<ItemData>({
        name: "",
        description: "",
        price: 0,
        quantity: 0,
        image: undefined,
        tags: [],
        subtags: [],
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setItemData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const price = parseFloat(e.target.value);
        setItemData((prevData) => ({ ...prevData, price }));
    };

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const quantity = parseInt(e.target.value);
        setItemData((prevData) => ({ ...prevData, quantity }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && /\.(jpe?g|png)$/i.test(file.name)) {
            setItemData((prevData) => ({ ...prevData, image: file }));
        } else {
            setItemData((prevData) => ({ ...prevData, image: undefined }));
        }
    };

    const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const tags = e.target.value.split(",").map((tag) => tag.trim());
        setItemData((prevData) => ({ ...prevData, tags }));
    };

    const handleSubtagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const subtags = e.target.value.split(",").map((subtag) => subtag.trim());
        setItemData((prevData) => ({ ...prevData, subtags }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(itemData);
    };

    return (
        <div className="add-item-page">
            <header>
                <Link to="/">Return to Home</Link>
            </header>
            <div className="add-item-container">
                <h1>Add Item Page</h1>
                <form className="add-item-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={itemData.name} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={itemData.description}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price:</label>
                        <input type="number" id="price" name="price" value={itemData.price} onChange={handlePriceChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantity">Quantity:</label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            value={itemData.quantity}
                            onChange={handleQuantityChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image:</label>
                        <input type="file" id="image" name="image" accept=".jpg, .jpeg, .png" onChange={handleImageChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tags">Tags:</label>
                        <input type="text" id="tags" name="tags" value={itemData.tags.join(", ")} onChange={handleTagsChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subtags">Subtags:</label>
                        <input
                            type="text"
                            id="subtags"
                            name="subtags"
                            value={itemData.subtags.join(", ")}
                            onChange={handleSubtagsChange}
                        />
                    </div>
                    <button type="submit">Add Item</button>
                </form>
            </div>
        </div>
    );
};

export default AddItemPage;

