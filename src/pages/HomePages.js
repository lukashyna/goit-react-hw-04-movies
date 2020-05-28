import React, { Component } from 'react';
import TrandingList from '../components/itemList/ItemList';
import * as itemsAPI from '../services/movies-api';

export default class TrandsPage extends Component {
  state = { items: [] };

  componentDidMount() {
    itemsAPI.fetchTrands().then(items => this.setState({ items }));
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <h1>Tranding today</h1>
        <TrandingList items={items} />
      </div>
    );
  }
}
