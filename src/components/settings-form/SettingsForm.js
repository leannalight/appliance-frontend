import React, { Component } from 'react';

import './SettingsForm.css';

export default class SettingsForm extends Component {
  
    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {
     return (
        <form className="item-add-form d-flex"
                onSubmit={this.onSubmit}>
            <label>
                PROGRAMME
                <select className="form-control"
                        onChange={this.onLabelChange}
                        value={this.state.value}>
                    <option value="cotton">Cotton</option>
                    <option value="easy-care">Easy-care</option>
                    <option value="mixed">Mixed farics</option>
                    <option value="delicates">Delicates</option>
                    <option value="woollens">Woollens</option>
                </select>
            </label>      
            <label>
                TIMER
                <select className="form-control"
                        onChange={this.onLabelChange}
                        value={this.state.value}>
                    <option value="30m">30 min</option>
                    <option value="45m">45 min</option>
                    <option value="60m">60 min</option>
                    <option value="90m ">90 min</option>
                </select>
            </label>
            <label>
                TEMPERATURE
                <select className="form-control"
                        onChange={this.onLabelChange}
                        value={this.state.value}>
                    <option value="20c">20°C</option>
                    <option value="30c">30°C</option>
                    <option value="45c">40°C</option>
                    <option value="60c">60°C</option>
                    <option value="90c">90°C</option>
                </select>
            </label>
            <button className="btn btn-outline-secondary">
                        Save
            </button>
         </form>
     )
    }
} 