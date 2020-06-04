import React, { Component, lazy, Suspense } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import SearchForm from '../components/searchForm/SearchForm';
import getSearchFromLocation from '../helpers/getSearch';
import * as itemsAPI from '../services/movies-api';

const AsyncItemList = lazy(() => import('../components/itemList/ItemList' /* webpackChunkNane: "item-list-page" */));
export default class MoviePage extends Component {
  state = {
    items: [],
    searchQuery: '',
  };

  static propTypes = {
    location: ReactRouterPropTypes.location.isRequired,
  };

  componentDidMount() {
    const { location } = this.props;

    if (location.search !== '') {
      itemsAPI.fetchMovies(getSearchFromLocation(location)).then(items => this.setState({ items }));
    }
  }

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
