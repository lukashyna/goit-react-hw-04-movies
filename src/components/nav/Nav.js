import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './nav.module.css';

const Nav = () => (
  <ul className={styles.navList}>
    <li className={styles.navListItem}>
      <NavLink to="/" exact activeClassName={styles.activeStyle}>
        Home
      </NavLink>
    </li>
    <li className={styles.navListItem}>
      <NavLink to="/movies" activeClassName={styles.activeStyle}>
        Movies
      </NavLink>
    </li>
  </ul>
);
export default Nav;
