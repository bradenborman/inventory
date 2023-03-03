import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Inventory from '../inventory/inventory';
require('./app.scss');

const App: React.FC = () => {

    return (
        <Router>
            <div className="container">
                <Switch>
                    <Route path="/">
                        <Inventory />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;