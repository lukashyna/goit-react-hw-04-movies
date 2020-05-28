import React, { Component, lazy, Suspense } from 'react';
import SearchForm from '../components/searchForm/SearchForm';
import * as itemsAPI from '../services/movies-api';

const AsyncItemList = lazy(() => import('../components/itemList/ItemList' /* webpackChunkNane: "item-list-page" */));
export default class MoviePage extends Component {
  state = {
    items: [],
    searchQuery: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;
    const prevQuery = prevState.searchQuery;
    const nextQuery = searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchItems();
    }
  }

  fetchItems = () => {
    const { searchQuery } = this.state;
    itemsAPI.fetchMovies(searchQuery).then(items => this.setState({ items }));
  };

  handleSubmit = query => {
    this.setState({
      searchQuery: query,
      items: [],
    });
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <SearchForm onSubmit={this.handleSubmit} />
        <Suspense fallback={<h2>Loading...</h2>}>{items.length > 0 && <AsyncItemList items={items} />}</Suspense>
      </div>
    );
  }
}
