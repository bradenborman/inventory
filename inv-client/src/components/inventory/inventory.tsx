import classNames from 'classnames';
import React, { useMemo, useState } from 'react';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { inventoryItems, allSubTypeMaps } from '../../data/iventoryItems-data';
import { iInventoryItem } from '../../models/inventoryItem';
import Spotlight from './components/spotlight/spotlight';
import { sort, sortAlphabetically } from '../../utilities/utilties';
import ItemCount from './components/itemCount';
import InventoryItem from './components/inventoryItem';


export const SortOrder = {
    ASCENDING: "ascending",
    DESCENDING: "descending",
};

const Inventory: React.FC = () => {

    const [spotlightItem, setSpotlightItem] = useState<iInventoryItem>(null);
    const [sortOrder, setSortOrder] = useState<string>(SortOrder.ASCENDING);
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
            .sort((a, b) => sort(sortOrder, a, b))
            .map((item: iInventoryItem, index: number) => {
                return (
                    <InventoryItem
                        tabindex={index}
                        spotlighted={(spotlightItem != null) && item.name == spotlightItem.name}
                        delayAmount={index}
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

    }, [selectedTagFilter, selectedSubTagFilter, spotlightItem, sortOrder]);


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

        return uts
            .sort(sortAlphabetically)
            .map((tag, index) => {
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
                <div className={classNames("sub-tag-select")}>
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


    function handleSortChangeClick(e: any) {
        let newOrder: string = sortOrder === SortOrder.ASCENDING ? SortOrder.DESCENDING : SortOrder.ASCENDING
        setSortOrder(newOrder);
    }


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
                    <div className={classNames('items-matched-count', 'search-control')}>
                        < ItemCount totalCount={items.length} />
                    </div>
                    <div className={classNames('sort-by-price', 'search-control')} onClick={handleSortChangeClick}>
                        Price <FontAwesomeIcon className={classNames("icon", { "down": sortOrder != SortOrder.ASCENDING })} icon={faSortUp} />
                    </div>
                    <div className={classNames('filter-input-group', 'search-control')}>
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