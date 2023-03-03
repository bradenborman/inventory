import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import InventoryItem, { InventoryItemProps } from '../inventory/inventoryItem';
import classNames from 'classnames';
import { iInventoryItem } from '../../models/inventoryItem';
import { allSubTypeMaps, inventoryItems } from '../../data/iventoryItems-data';
import Spotlight from '../inventory/spotlight/spotlight';
import { movePokemonEntriesToBottom } from '../../utilities/utilties';
require('./app.scss');

const App: React.FC = () => {

    const [spotlightItem, setSpotlightItem] = useState<iInventoryItem>(null);

    const [subTagFilterMap, setSubTagFilterMap] = useState<Map<string, string[][]>>(null);

    const [selectedTagFilter, setSelectedTagFilter] = useState<string>("All");
    const [selectedSubTagFilter, setSelectedSubTagFilter] = useState<string>("All");

    const handleSpotLightChange = (itemToSpotLight: iInventoryItem): void => {
        setSpotlightItem(itemToSpotLight);
    }


    const items: JSX.Element[] = useMemo(() => {
        return inventoryItems.filter((item: iInventoryItem) => {
            if (selectedTagFilter == "All")
                return true;
            else {
                if (selectedSubTagFilter == "All") {
                    return item?.tags.includes(selectedTagFilter)
                }
                else {
                    return item?.subTags?.includes(selectedSubTagFilter)
                }
            }
        })
            .sort(movePokemonEntriesToBottom)
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
    }, [selectedTagFilter, selectedSubTagFilter]);


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


    const subTagsOptions: JSX.Element = useMemo(() => {
        if (subTagFilterMap == null) return null;

        const allTypeGroupings: string[][] = subTagFilterMap.get(selectedTagFilter)

        const options: JSX.Element[] = [];

        allTypeGroupings.forEach((group: string[]) => {
            const groupOptions: JSX.Element[] = group.map((itemInArray: string, index: number) => {
                return index > 0 ? <option key={index} value={itemInArray}>{itemInArray}</option> : null
            })

            const optgroup: JSX.Element = (
                <optgroup label={group[0]}>
                    {groupOptions}
                </optgroup>
            )

            options.push(optgroup)

        });


        return (
            <div className='sub-tag-select'>
                <select onChange={(e: any) => setSelectedSubTagFilter(e.target.value)}>
                    <option key={-1} value="All">All</option>
                    {options}
                </select>
            </div>
        )

    }, [selectedTagFilter, subTagFilterMap])


    const handleTagChange = (e: any): void => {
        const selectedNewFilter: string = e.target.value;

        const subTypeMatch: Map<string, string[][]> | undefined = allSubTypeMaps
            .find((map: Map<string, string[][]>) => {
                return map.has(selectedNewFilter)
            })

        if (subTypeMatch != undefined)
            setSubTagFilterMap(subTypeMatch)
        else
            setSubTagFilterMap(null)

        setSelectedTagFilter(selectedNewFilter)
        setSelectedSubTagFilter("All")
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
                                    <div className='items-matched-count'>
                                        ({items.length} items)
                                    </div>
                                    <div className='filter-input-group'>
                                        <label htmlFor='tag-select'>Filter:</label>
                                        <select id="tag-select" value={selectedTagFilter} onChange={handleTagChange}>
                                            {uniqueTags}
                                        </select>
                                    </div>
                                    {subTagsOptions}
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