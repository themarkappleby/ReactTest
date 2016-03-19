import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchMovies} from './actions';
import store from '../../store';
import MovieList from '../../components/MovieList/MovieList.jsx';
import MovieDetails from '../../components/MovieDetails/MovieDetails.jsx';

const mapStateToProps = state => {
  return { movies: state.movies };
};

class Movies extends Component {
  componentDidMount() {
    if (!this.props.movies.length) {
      store.dispatch(fetchMovies());
    }
  }
  getActiveMovie() {
    if (!this.props.movies.length) return [];
    const id = this.props.params.id || this.props.movies[0].id;
    const activeMovie = this.props.movies.find(movie => {
      return movie.id == id;
    });
    return activeMovie;
  }
  render() {
    return (
      <div className="combo">
        <div className="combo-first">
          <MovieList movies={this.props.movies} />
        </div>

        <div className="combo-last">
          <MovieDetails movie={this.getActiveMovie()} />
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps)(Movies);
