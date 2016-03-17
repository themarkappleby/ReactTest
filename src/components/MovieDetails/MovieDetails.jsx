import React from 'react';
import styles from './movieDetails.css';

export default props => {
  if (!props.movie) return <div>loading...</div>;
  const {id, title, rating, runtime, poster} = props.movie;
  return (
    <div className={styles.details}>
      <div className="combo">
        <div className="combo-first">
          <img src={poster} />
        </div>
        <div className="combo-last">
          <h2>{title}</h2>
          <ul>
            <li>Rating: {rating}%</li>
            <li>Runtime: {runtime}min</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
