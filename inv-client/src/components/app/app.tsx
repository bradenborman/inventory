import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Inventory from '../inventory/inventory';
import LandingPage from '../landingPage';
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
                        <Route path="/inventory">
                            <Navbar />
                            <Inventory />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    );
};

export default App;