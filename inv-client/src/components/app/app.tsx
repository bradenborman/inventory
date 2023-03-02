import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from '../navbar/Navbar';
import ProductsPage from '../products/productsPage';
require('./app.scss');

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route path="/products">
                        <ProductsPage />
                    </Route>
                    <Route path="/customers">
                        <h1>Customers</h1>
                    </Route>
                    <Route path="/orders">
                        <h1>Orders</h1>
                    </Route>
                    <Route path="/">
                        <h1>Welcome to Inventory</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};
const Home: React.FC = () => {
    return (
        <div>
            <h2>Home Page</h2>
        </div>
    );
};

const About: React.FC = () => {
    return (
        <div>
            <h2>About Page</h2>
        </div>
    );
};

const Contact: React.FC = () => {
    return (
        <div>
            <h2>Contact Page</h2>
        </div>
    );
};

export default App;
