import React, { Component } from 'react';

import './ItemAddForm.css';

export default class ItemAddForm extends Component {

    state = {
        title: ''
    };

    onTitleChange = (e) => {
        this.setState({
            title: e.target.value
        });
    };
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.title);
        this.setState({
            title: ''
        });
    };

    render() {
        return (
            <form className="item-add-form d-flex"
                  onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control"
                       onChange={this.onTitleChange}
                       placeholder="Type new appliance name"
                       value={this.state.title} />
                <button
                    className="btn btn-outline-secondary">
                    Add Device
                </button>
            </form>
        )
    }
}
