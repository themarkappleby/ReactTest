import React, {Component} from 'react';
import styles from './movie.css';

export default class Movie extends Component {
  render() {
    const {id, title, rating, runtime, poster} = this.props.data;
    return (
      <div className={styles.movie}>
        <img className={styles.poster} src={poster} />
        <div className={styles.title}>{title}</div>
        <div className={styles.rating}>{rating}</div>
        <div className={styles.runtime}>{runtime}</div>
      </div>
    );
  }
}
