import {createAction} from 'redux-actions';
import fetch from 'isomorphic-fetch';

export const fetchMovies = createAction('FETCH_MOVIES', () => {
  return fetch(window.API_ENDPOINT).then(response => response.json());
});
