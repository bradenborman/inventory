import React from "react";

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                Braden's Inventory
            </a>
        </nav>
    );
};

export default Navbar;
