import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import AppItemList from '../app-item-list';
import PopupSettings from '../popup-settings';
import ItemAddForm from '../item-add-form';

import './App.css';

export default class App extends Component {

 maxId = 100;

 state = {
  itemsAllData: [
    this.createApplianceItem('Appliance One'),
    this.createApplianceItem('Appliance Two'),
    this.createApplianceItem('Appliance Three')
  ],
  seen: false
 };

 createApplianceItem(title, programme, timer, temperature) {
   return {
    title,
    programme,
    timer,
    temperature,
    id: this.maxId++
   }
 }

 deleteItem = (id) => {
  this.setState(({ itemsAllData }) => {
    const idx = itemsAllData.findIndex((el) => el.id === id);

    const newArray = [
      ...itemsAllData.slice(0, idx), 
      ...itemsAllData.slice(idx + 1)
    ];

    return {
      itemsAllData: newArray
    };
  });
};

  addItem = (text) => {
  // generate id ?
  const newItem = this.createApplianceItem(text);
  /*{
    title: text,
    programme: '0',
    timer: '0',
    temperature: '0',
    id: this.maxId++
  } */

  // add element in array ?
  this.setState(({ itemsAllData }) => {

    const newArr = [
      ...itemsAllData,
      newItem
    ];

    return {
      itemsAllData: newArr
    };
  });
};

  updateItem = (text) => {

  }

  togglePopup = () => {
    this.setState({
      seen: !this.state.seen
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);

      // 1. update object
      const oldItem = arr[idx];
      const newItem = {...oldItem,
        [propName]: !oldItem[propName]};

      // 2. return new array
      return [
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx + 1)
      ];
  }

  onToggleProgramme = (id) => {
    this.setState(({ itemsAllData }) => {
      return {
        itemsAllData: this.toggleProperty(itemsAllData, id, 'programme')
      };
    });
  };

  onToggleTimer = (id) => {
    this.setState(({ itemsAllData }) => {
      return {
        itemsAllData: this.toggleProperty(itemsAllData, id, 'timer')
      };
    });
  };

  render() {

    const { itemsAllData } = this.state;
    const doneCount = itemsAllData
                      .filter((el) => el.done).length;
    const toselectCount = itemsAllData.length - doneCount;

    return (
      <div className="appliance-app">
          <AppHeader toSelect={toselectCount} done={doneCount} />
          <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
          </div>
          <AppItemList 
            allItems={ this.state.itemsAllData }
            onDeleted={ this.deleteItem }
            onUpdated={ this.updateItem } />
          
          {this.state.seen ? <PopupSettings onTogglePopup={this.togglePopup} /> : null}

          <ItemAddForm 
            onItemAdded={ this.addItem } />
      </div>
    );
  }
}