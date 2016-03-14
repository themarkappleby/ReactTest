import React, {Component} from 'react';
import Movie from '../Movie/Movie.jsx';
import styles from './movieList.css';

export default class MovieList extends Component {
  render() {
    return (
      <div className={styles.list}>
        {this.props.movies.map(movie => {
          return <Movie data={movie} key={movie.id} />;
        })}
      </div>
    );
  }
}
