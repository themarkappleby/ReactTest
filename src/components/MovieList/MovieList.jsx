import React, {Component} from 'react';
import MovieListItem from '../MovieListItem/MovieListItem.jsx';
import styles from './movieList.css';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.selectMovie = this.selectMovie.bind(this);
  }

  selectMovie(movie) {
    this.props.onSelectMovie(movie);
  }

  render() {
    return (
      <div className={styles.list}>
        {this.props.movies.map((movie, index) => {
          return <MovieListItem movie={movie} key={index} />;
        })}
      </div>
    );
  }
}
