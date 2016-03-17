import React from 'react';
import styles from './header.css';

export default props => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className="combo">
          <div className="combo-first">
            MyMovieDB.com
          </div>
          <div className="combo-last">
          </div>
        </div>
      </div>
    </header>
  );
};
