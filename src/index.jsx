import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MovieList from './components/MovieList/MovieList.jsx';
import MovieForm from './components/MovieForm/MovieForm.jsx';
import MovieDetails from './components/MovieDetails/MovieDetails.jsx';
import 'whatwg-fetch';
const URL = '/assets/movies.json';
import '!style!css!./styles/index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
    this.fetchMovies();
    this.handleNewMovie = this.handleNewMovie.bind(this);
    this.selectMovie = this.selectMovie.bind(this);
  }

  fetchMovies() {
    fetch(URL).then(res => res.json()).then(movies => {
      this.setState({
        movies,
        selectedMovie: movies[0]
      });
    });
  }

  handleNewMovie(newMovie) {
    let allMovies = this.state.movies.slice(); // create a copy of movies
    allMovies.push(newMovie);
    this.setState({movies: allMovies});
  }

  selectMovie(selectedMovie) {
    this.setState({selectedMovie});
    console.log(this.state);
  }

  render() {
    return (
      <div className="app">
        <div className="combo">
          <div className="combo-first">
            <MovieList movies={this.state.movies} onSelectMovie={this.selectMovie} />
          </div>
          <div className="combo-last">
            <MovieDetails movie={this.state.selectedMovie}></MovieDetails>
          </div>
        </div>
        {/*<MovieForm newMovie={this.handleNewMovie} />*/}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
