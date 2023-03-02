import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar__brand">
                <Link to="/">Inventory</Link>
            </div>
            <ul className="navbar__menu">
                <li className="navbar__menu-item">
                    <Link to="/products">Products</Link>
                </li>
                <li className="navbar__menu-item">
                    <Link to="/customers">Customers</Link>
                </li>
                <li className="navbar__menu-item">
                    <Link to="/orders">Orders</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
