import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Inventory from '../inventory/inventory';
import Navbar from '../navbar/navbar';
require('./app.scss');

const App: React.FC = () => {

    return (
        <>
            <Router>
                <Navbar />
                <div className="container">
                    <Switch>
                        <Route exact path="/">
                            <Inventory />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    );
};

export default App;