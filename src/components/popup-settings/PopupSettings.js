import React from 'react';
import './PopupSettings.css';
import SettingsForm from '../settings-form';

const PopupSettings = () => {
    return (
        <div className="popup-settings d-flex">
            <h3 className="popup-settings-title">Select settings</h3>

            <SettingsForm />
        </div>
    );
};

export default PopupSettings;