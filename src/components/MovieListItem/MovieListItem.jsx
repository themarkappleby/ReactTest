import React, {Component} from 'react';
import styles from './movieListItem.css';

export default class MovieListItem extends Component {
  render() {
    const {id, title, rating, runtime, poster} = this.props.data;
    return (
      <div className={styles.item} onClick={this.props.onClick}>
        <img className={styles.poster} src={poster} />
        <div className={styles.title}>{title}</div>
      </div>
    );
  }
}
