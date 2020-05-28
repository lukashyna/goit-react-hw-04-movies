import React from 'react';
import PropTypes, { string, number } from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Link, withRouter } from 'react-router-dom';
import styles from './itemList.module.css';

const ItemList = ({ items = [], location }) => (
  <ul className={styles.itemList}>
    {items.map(item => (
      <li key={item.id}>
        <Link to={{ pathname: `/movies/${item.id}`, state: { from: location } }}>
          {item.original_title} {item.original_name}
        </Link>
      </li>
    ))}
  </ul>
);
ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: number.isRequired, original_name: string, original_title: string }))
    .isRequired,
  location: ReactRouterPropTypes.location.isRequired,
};
export default withRouter(ItemList);
