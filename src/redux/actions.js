import fetch from 'isomorphic-fetch';

export const selectMovie = movie => {
  return {
    type: 'SELECT_MOVIE',
    payload: movie.id
  };
};

export function fetchMovies() {
  return dispatch => {
    return fetch('/assets/movies.json')
      .then(response => response.json())
      .then(movies => dispatch(fetchedMovies(movies)));
  };
}

export const fetchedMovies = movies => {
  return {
    type: 'FETCHED_MOVIES',
    payload: movies
  };
};
