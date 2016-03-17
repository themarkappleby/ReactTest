import React from 'react';
import {connect} from 'react-redux';
import styles from './movieListItem.css';
import {selectMovie} from '../../redux/actions';

const mapDispatchToProps = dispatch => {
  return {
    onSelectMovie: movie => {
      dispatch(selectMovie(movie));
    }
  };
};

const MovieListItem = props => {
  const {id, title, rating, runtime, poster} = props.movie;
  return (
    <div className={styles.item} onClick={() => props.onSelectMovie(props.movie)}>
      <img className={styles.poster} src={poster} />
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(MovieListItem);
