import React from 'react';
import styles from './header.css';
import {Link} from 'react-router';

const Header = props => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className="combo combo--rev combo--middle">
          <div className="combo-first">
            MyMovieDB.com
          </div>
          <div className="combo-last">
            <Link
              to="/movies" className={styles.link} activeClassName={styles.linkActive}>Movies</Link>
            <Link to="/add-movie" className={styles.link} activeClassName={styles.linkActive}>Add Movie</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
