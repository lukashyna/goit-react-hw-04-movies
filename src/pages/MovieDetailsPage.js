import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import Movie from '../components/movieDetails/MovieDetailis';
import * as itemsAPI from '../services/movies-api';
import getIdFromProps from '../helpers/getId';

export default class MovieDetailsPage extends Component {
  state = {
    item: null,
  };

  static propTypes = {
    location: ReactRouterPropTypes.location.isRequired,
    history: ReactRouterPropTypes.history.isRequired,
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    itemsAPI.fetchMoviesWithId(id).then(item => this.setState({ item }));
  }

  handleGoback = () => {
    const { history, location } = this.props;
    if (location.state) {
      history.push(location.state.from);
      return;
    }
    history.push('/movies');
  };

  render() {
    const { item } = this.state;
    return (
      <div>
        {item && (
          <Movie
            photo={
              item.poster_path
                ? `https://image.tmdb.org/t/p/w200${item.poster_path}`
                : 'https://us.123rf.com/450wm/oculo/oculo2004/oculo200400003/143645399-stock-vector-no-image-available-icon-.jpg?ver=6'
            }
            item={item}
            onGoback={this.handleGoback}
          />
        )}
      </div>
    );
  }
}
