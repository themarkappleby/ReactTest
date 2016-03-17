import React from 'react';
import MovieListItem from '../MovieListItem/MovieListItem.jsx';
import styles from './movieList.css';

export default props => {
  return (
    <div className={styles.list}>
      {props.movies.map((movie, index) => {
        return <MovieListItem movie={movie} key={index} />;
      })}
    </div>
  );
};
