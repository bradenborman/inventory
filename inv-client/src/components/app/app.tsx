import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import InventoryItem, { InventoryItemProps } from '../inventory/inventoryItem';
import classNames from 'classnames';
import { iInventoryItem } from '../../data/inventoryItem';
import { inventoryItems } from '../../iventoryItems-data';
require('./app.scss');

const App: React.FC = () => {

    const [spotlightItem, setSpotlightItem] = useState<iInventoryItem>(null);

    const handleSpotLightChange = (itemToSpotLight: iInventoryItem): void => {
        setSpotlightItem(itemToSpotLight);
    }


    const items: JSX.Element[] = inventoryItems.map((item: any, index: React.Key) => {
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

    const spotlightItemJSX: JSX.Element | null = useMemo(() => {
        let element;
        if (spotlightItem == null)
            element = <></>
        else
            element = <>{spotlightItem.name}</>
        return (
            <div className='spotlight'>
                {element}
            </div>
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