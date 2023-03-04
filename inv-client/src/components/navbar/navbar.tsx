import React from "react";

interface NavbarProps { }

class Navbar extends React.Component<NavbarProps> {
    render() {
        return (
            <nav className="navbar">
                <a className="navbar-brand" href="/">
                    Borman's Inventory
                </a>
            </nav>
        );
    }
}

export default Navbar;