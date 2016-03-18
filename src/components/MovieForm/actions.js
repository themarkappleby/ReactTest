import {createAction} from 'redux-actions';
import fetch from 'isomorphic-fetch';
import store from '../../store';
import {hashHistory} from 'react-router';

export const addMovie = movie => {
  return dispatch => {
    fetch(window.API_ENDPOINT, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    })
    .then(response => response.json())
    .then(movies => {
      const lastMovieId = movies[movies.length - 1].id;
      hashHistory.push({pathname: `/movies/${lastMovieId}`});
      dispatch(createAction('ADD_MOVIE', movies));
    });
  };
};
