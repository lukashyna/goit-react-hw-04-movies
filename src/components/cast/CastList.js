import React, { Component } from 'react';
import CastListItem from './CastListItem';
import * as itemsAPI from '../../services/movies-api';
import getIdFromProps from '../../helpers/getId';
import styles from './castList.module.css';

export default class Cast extends Component {
  state = {
    items: null,
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    itemsAPI.fetchCast(id).then(items => this.setState({ items }));
  }

  render() {
    const { items } = this.state;
    return (
      <ul className={styles.castList}>
        {items &&
          items.map(item => (
            <li key={item.cast_id} className={styles.castListItem}>
              <CastListItem
                photo={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w200${item.profile_path}`
                    : 'https://us.123rf.com/450wm/oculo/oculo2004/oculo200400003/143645399-stock-vector-no-image-available-icon-.jpg?ver=6'
                }
                item={item}
              />
            </li>
          ))}
      </ul>
    );
  }
}
