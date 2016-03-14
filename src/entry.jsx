import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MovieList from './components/MovieList/MovieList.jsx';
import MovieForm from './components/MovieForm/MovieForm.jsx';
import 'whatwg-fetch';
const URL = '/assets/movies.json';
import '!style!css!./styles/entry.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
    this.fetchMovies();
    this.handleNewMovie = this.handleNewMovie.bind(this);
  }

  fetchMovies() {
    fetch(URL).then(res => res.json()).then(movies => {
      this.setState({movies});
    });
  }

  handleNewMovie(newMovie) {
    let allMovies = this.state.movies.slice(); // create a copy of movies
    allMovies.push(newMovie);
    this.setState({movies: allMovies});
  }

  render() {
    return (
      <div className="app">
        <MovieList movies={this.state.movies} />
        <MovieForm newMovie={this.handleNewMovie} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
