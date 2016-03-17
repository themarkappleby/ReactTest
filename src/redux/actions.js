import fetch from 'isomorphic-fetch';
import {createAction} from 'redux-actions';

const API_ENDPOINT = 'http://localhost:3001/api/movies';

export const selectMovie = createAction('SELECT_MOVIE', movie => movie.id);

export const addMovie = createAction('ADD_MOVIE', movie => {
  return fetch(API_ENDPOINT, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
  })
  .then(response => response.json());
});

export const fetchMovies = createAction('FETCH_MOVIES', () => {
  return fetch(API_ENDPOINT).then(response => response.json());
});
