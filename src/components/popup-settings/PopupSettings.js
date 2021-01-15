import React, { Component } from 'react';
import './PopupSettings.css';
import SettingsForm from '../settings-form';

export default class PopupSettings extends Component {
    handleClick = () => {
        this.props.onTogglePopup();
    }

    render() {
        return (
            <div className="popup-settings d-flex">
                <div className="popup-settings-content">
                    <span 
                        className="popup-settings-close"
                        onClick={this.handleClick}>
                        &times;
                    </span>
                    <p className="popup-settings-title">
                        Select settings
                    </p>
                    
                    <SettingsForm />
                </div>
            </div>
        );
    }
};
