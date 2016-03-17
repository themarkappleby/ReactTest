import React from 'react';
import styles from './movieDetails.css';

export default props => {
  if (!props.movie) return <div className={styles.details}>loading...</div>;
  const {id, title, rating, runtime, poster} = props.movie;
  return (
    <div className={styles.details}>
      <div className="combo">
        <div className="combo-first">
          <img className={styles.poster} src={poster} />
        </div>
        <div className="combo-last">
          <div className={styles.info}>
            <h2>{title}</h2>
            <ul>
              <li><strong>Rating:</strong> {rating}%</li>
              <li><strong>Runtime:</strong> {runtime}min</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
