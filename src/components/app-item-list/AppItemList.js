import React from 'react';

import './AppItemList.css';
import AppItem from '../app-item';

const AppItemList = ({ allItems, onDeleted}) => {

    const elements = allItems.map((item) => {
        const { id, ...itemProps } = item;

        return (  
            <li key={id}>
                <AppItem { ...itemProps } 
                onDeleted={() => onDeleted(id)} />
            </li> 
        );
    });
  
    return (
        <ul className="app-item-list">
           { elements } 
        </ul>
    );
}

export default AppItemList;