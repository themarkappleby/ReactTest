import {createAction} from 'redux-actions';

export const selectMovie = createAction('SELECT_MOVIE', movie => movie.id);
