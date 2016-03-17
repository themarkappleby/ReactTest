import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchMovies} from './actions';
import store from '../../store';
import MovieList from '../../components/MovieList/MovieList.jsx';
import MovieDetails from '../../components/MovieDetails/MovieDetails.jsx';

const mapStateToProps = state => {
  return {
    movies: state.movies,
    selectedMovie: state.movies.find(movie => movie.id === state.selectedMovieId)
  };
};

class Movies extends Component {
  componentDidMount() {
    store.dispatch(fetchMovies());
  }
  render() {
    return (
      <div className="combo">
        <div className="combo-first">
          <MovieList movies={this.props.movies} />
        </div>

        <div className="combo-last">
          <MovieDetails movie={this.props.selectedMovie} />
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps)(Movies);
