import React, { Component } from 'react';
import * as itemsAPI from '../../services/movies-api';
import ReviewsListItem from './ReviewsListItem';
import getIdFromProps from '../../helpers/getId';
import styles from './reviews.module.css';

export default class Reviews extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    itemsAPI.fetchReviews(id).then(items => this.setState({ items }));
  }

  render() {
    const { items } = this.state;
    return (
      <ul className={styles.reviewsList}>
        {items.length > 0 ? (
          items.map(item => (
            <li key={item.id}>
              <ReviewsListItem item={item} />
            </li>
          ))
        ) : (
          <p>We dont have any reviews for this movie.</p>
        )}
      </ul>
    );
  }
}
