import React from 'react';
import styles from './movieListItem.css';
import {Link} from 'react-router';

const MovieListItem = props => {
  const {id, title, rating, runtime, poster} = props.movie;
  return (
    <Link to={`/movies/${id}`} className={styles.item}>
      <img className={styles.poster} src={poster} />
      <div className={styles.title}>{title}</div>
    </Link>
  );
};

export default MovieListItem;
