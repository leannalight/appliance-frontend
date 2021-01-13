import React from 'react';
import './AppHeader.css';

const AppHeader = ({toSelect, done}) => {
    return (
        <div className="app-header d-flex">
            <h1>My Appliance App</h1>
            <h2>{toSelect} more in progress, {done} complete</h2>
        </div>
    );
};

export default AppHeader;