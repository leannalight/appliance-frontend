import React, { Component } from 'react';
import './Popup.css';
import SettingsForm from '../settings-form';

export default class Popup extends Component {
  
    render() {
        return (
            <div className="popup">
                <div className="popup_content">
                    <h3 className="popup-title">{this.props.text}</h3>
                <button onClick={this.props.closePopup}
                        className="close">
                    X Close
                </button>
                <SettingsForm />
                </div>
            </div>
        );
    }
};
