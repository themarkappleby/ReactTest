import React, {Component} from 'react';
import styles from './movieDetails.css';

export default class MovieDetails extends Component {
  render() {
    if (!this.props.movie) return <div>loading...</div>;
    const {id, title, rating, runtime, poster} = this.props.movie;
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
  }
}
