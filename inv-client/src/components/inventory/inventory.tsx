import classNames from 'classnames';
import React, { useMemo, useState } from 'react';
import { inventoryItems, allSubTypeMaps } from '../../data/iventoryItems-data';
import { iInventoryItem } from '../../models/inventoryItem';
import { movePokemonEntriesToBottom } from '../../utilities/utilties';
import InventoryItem from './inventoryItem';
import Spotlight from './spotlight/spotlight';

const Inventory: React.FC = () => {

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
                return selectedSubTagFilter == "All"
                    ? item?.tags.includes(selectedTagFilter)
                    : item?.subTags?.includes(selectedSubTagFilter);
            }
        })
            .sort(movePokemonEntriesToBottom)
            .map((item: iInventoryItem, index: number) => {
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


    const subTagsSelect = () => {
        const subTagOptions = useMemo(() => {
            if (!subTagFilterMap) {
                return null;
            }

            const typeGroupings = subTagFilterMap.get(selectedTagFilter);
            const options: JSX.Element[] = [];

            typeGroupings.forEach((group, index) => {
                const groupOptions = group.slice(1).map((itemInArray) => (
                    <option key={itemInArray} value={itemInArray}>
                        {itemInArray}
                    </option>
                ));

                const optgroup = (
                    <optgroup key={`optGroup${index}`} label={group[0]}>
                        {groupOptions}
                    </optgroup>
                );

                options.push(optgroup);
            });

            return (
                <div className="sub-tag-select">
                    <select onChange={(e) => setSelectedSubTagFilter(e.target.value)}>
                        <option key={-1} value="All">
                            All
                        </option>
                        {options}
                    </select>
                </div>
            );
        }, [selectedTagFilter, subTagFilterMap]);

        return subTagOptions;
    };


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
                    {subTagsSelect()}
                </div>
                {items}
            </div>
        </div>
    );
};

export default Inventory;
