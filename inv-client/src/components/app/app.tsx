import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import InventoryItem, { InventoryItemProps } from '../inventory/inventoryItem';
import classNames from 'classnames';
import { iInventoryItem } from '../../models/inventoryItem';
import { inventoryItems } from '../../data/iventoryItems-data';
import Spotlight from '../inventory/spotlight/spotlight';
require('./app.scss');

const App: React.FC = () => {

    const [spotlightItem, setSpotlightItem] = useState<iInventoryItem>(null);

    const handleSpotLightChange = (itemToSpotLight: iInventoryItem): void => {
        setSpotlightItem(itemToSpotLight);
    }


    const items: JSX.Element[] = useMemo(() => {
        return inventoryItems.map((item: any, index: React.Key) => {
            return (
                <InventoryItem
                    key={index}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    quantity={item.quantity}
                    image={item.image}
                    handleClick={e => {
                        handleSpotLightChange(item)
                    }}
                />
            )
        });
    }, []);


    const spotlightItemJSX: JSX.Element | null = useMemo(() => {
        if (spotlightItem == null)
            return null;
        return (
            <Spotlight tags={spotlightItem.tags} name={spotlightItem.name} quantity={spotlightItem.quantity} price={spotlightItem.price}
                description={spotlightItem.description} image={spotlightItem.image}
                onClose={e => setSpotlightItem(null)}
            />
        )
    }, [spotlightItem]);




    return (
        <Router>
            <div className="container">
                <Switch>
                    <Route path="/">
                        <div className={classNames('inventory-container', { 'spotlight-open': (spotlightItem != null) })}>
                            {spotlightItemJSX}
                            <div className='inventory-item-container'>
                                {items}
                            </div>
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;