import {createAction} from 'redux-actions';
import fetch from 'isomorphic-fetch';

export const fetchMovies = () => {
  return dispatch => {
    fetch(window.API_ENDPOINT)
    .then(response => response.json())
    .then(movies => {
      dispatch({
        type: 'FETCH_MOVIES',
        payload: movies
      });
      // dispatch(createAction('FETCH_MOVIES', movies));
    });
  };
};
