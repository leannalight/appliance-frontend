import React, { Component } from 'react';

import './AppItem.css';

export default class AppItem extends Component {

    render() {
        const { title, programme, timer, temperature, onDeleted, onTogglePopup } = this.props;

        return (
            <div className="app-item">
                <ul>
                    <li>{ title }</li>
                    <li>Programme: { programme }</li>
                    <li>Timer: { timer }</li>
                    <li>Temperature: { temperature }</li>
                </ul>
                <div className="btn-group">
                    <button type="button"
                            className="btn btn-outline-danger"
                            onClick={onDeleted}>
                        <i className="fa fa-trash-o small" />
                    </button>
                    <button type="button"
                            className="btn btn-outline-info"
                            onClick={onTogglePopup}>
                        <i className="fa fa-pencil-square-o small" />
                    </button>
                </div>
            </div>
        );
    }
}