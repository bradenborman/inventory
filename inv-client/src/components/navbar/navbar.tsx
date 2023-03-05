import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface NavbarProps { }

class Navbar extends React.Component<NavbarProps> {
    render() {
        return (
            <nav className="navbar">
                <a className="navbar-brand" href="/">
                    Borman's Inventory
                </a>
                <div className="navbar-links">
                    <Link to="/inventory/add-item" className="navbar-link">
                        <FontAwesomeIcon icon={faPlus} />
                        <span>Add Item</span>
                    </Link>
                </div>
            </nav>
        );
    }
}

export default Navbar;
