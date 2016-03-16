import fetch from 'isomorphic-fetch';
import {createAction} from 'redux-actions';

export const selectMovie = createAction('SELECT_MOVIE', movie => movie.id);

export const fetchMovies = createAction('FETCH_MOVIES', dispatch => {
  return fetch('/assets/movies.json').then(response => response.json());
});
