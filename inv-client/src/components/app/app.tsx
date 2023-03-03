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
    const [tagFilter, setTagFilter] = useState<string>("All");

    const handleSpotLightChange = (itemToSpotLight: iInventoryItem): void => {
        setSpotlightItem(itemToSpotLight);
    }


    const items: JSX.Element[] = useMemo(() => {
        return inventoryItems.filter((item: iInventoryItem) => {
            if (tagFilter == "All")
                return true;
            else {
                return item?.tags.includes(tagFilter)
            }
        })
            .map((item: any, index: React.Key) => {
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
    }, [tagFilter]);


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


    const determineTagValues = (inventoryItems: iInventoryItem[]): JSX.Element[] => {
        const uts: string[] = ["All"];
        inventoryItems.forEach(obj => {
            obj?.tags.forEach(tag => {
                if (!uts.includes(tag)) {
                    uts.push(tag);
                }
            })
        })

        return uts.map((tag, index) => {
            return <option key={index} value={tag}>{tag}</option>
        })
    }

    const uniqueTags: JSX.Element[] = useMemo(() => determineTagValues(inventoryItems), [inventoryItems]);


    const handleTagChange = (e: any): void => {
        setTagFilter(e.target.value)
    }

    return (
        <Router>
            <div className="container">
                <Switch>
                    <Route path="/">
                        <div className={classNames('inventory-container', { 'spotlight-open': (spotlightItem != null) })}>
                            {spotlightItemJSX}
                            <div className='inventory-item-container'>
                                <div className='search-container'>
                                    <div className='filter-input-group'>
                                        <label htmlFor='tag-select'>Filter:</label>
                                        <select id="tag-select" value={tagFilter} onChange={handleTagChange}>
                                            {uniqueTags}
                                        </select>
                                    </div>
                                    <div className='items-matched-count'>
                                        ({items.length} items)
                                    </div>
                                </div>
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