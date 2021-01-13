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
  ]
 };

 createApplianceItem(title) {
   return {
    title,
    programme: '0',
    timer: '0',
    temperature: '0',
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
            onDeleted={ this.deleteItem } />
          
          <PopupSettings />

          <ItemAddForm onItemAdded={this.addItem}/>
      </div>
    );
  }
}