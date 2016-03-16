import fetch from 'isomorphic-fetch';
import {createAction} from 'redux-actions';

export const selectMovie = createAction('SELECT_MOVIE', movie => movie.id);

export function fetchMovies() {
  return dispatch => {
    return fetch('/assets/movies.json')
      .then(response => response.json())
      .then(movies => dispatch(fetchedMovies(movies)));
  };
}

export const fetchedMovies = createAction('FETCHED_MOVIES');
