import {createAction} from 'redux-actions';
import fetch from 'isomorphic-fetch';

export const addMovie = createAction('ADD_MOVIE', movie => {
  return fetch(window.API_ENDPOINT, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
  })
  .then(response => response.json());
});
