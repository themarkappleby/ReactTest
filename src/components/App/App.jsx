import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchMovies} from './actions';
import store from '../../store';

// components
import Header from '../Header/Header.jsx';
import MovieList from '../MovieList/MovieList.jsx';
import MovieDetails from '../MovieDetails/MovieDetails.jsx';
import MovieForm from '../MovieForm/MovieForm.jsx';

const URL = '/assets/movies.json';

const mapStateToProps = state => {
  return {
    movies: state.movies,
    selectedMovie: state.movies.find(movie => movie.id === state.selectedMovieId)
  };
};

class App extends Component {
  componentDidMount() {
    store.dispatch(fetchMovies());
  }
  render() {
    return (
      <div className="app">
        <Header />
        <div className="container">
          <div className="combo">
            <div className="combo-first">
              <MovieList movies={this.props.movies} />
              <MovieForm />
            </div>

            <div className="combo-last">
              <MovieDetails movie={this.props.selectedMovie} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
