import React from 'react';
import MovieListItem from '../MovieListItem/MovieListItem.jsx';
import styles from './movieList.css';

const MovieList = props => {
  return (
    <div className={styles.list}>
      {props.movies.map((movie, index) => {
        return <MovieListItem movie={movie} key={index} />;
      })}
    </div>
  );
};

export default MovieList;
