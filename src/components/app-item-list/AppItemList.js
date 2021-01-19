import React from 'react';

import './AppItemList.css';
import AppItem from '../app-item';

const AppItemList = ({ allItems, onDeleted, onTogglePopup }) => {

    const elements = allItems.map((item) => {
        const { id, ...itemProps } = item;

        return (  
            <li key={id}>
                <AppItem { ...itemProps } 
                onDeleted={() => onDeleted(id)}
                onTogglePopup={() => onTogglePopup(id)} />
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