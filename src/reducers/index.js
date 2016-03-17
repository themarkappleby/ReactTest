import { combineReducers } from 'redux';
import movies from './movies';
import selectedMovieId from './selectedMovieId';

const reducers = combineReducers({movies, selectedMovieId});

export default reducers;
