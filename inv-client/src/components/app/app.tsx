import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddItemPage from '../additem/addItemPage';
import Inventory from '../inventory/inventory';
import LandingPage from '../landingpage/landingPage';
import Navbar from '../navbar/navbar';
require('./app.scss');

const App: React.FC = () => {

    return (
        <>
            <Router>
                <div className="container">
                    <Switch>
                        <Route exact path="/">
                            <LandingPage />
                        </Route>
                        <Route exact path="/inventory">
                            <Navbar />
                            <Inventory />
                        </Route>
                        <Route exact path="/inventory/add-item">
                            <AddItemPage />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    );
};

export default App;