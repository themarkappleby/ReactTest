import { combineReducers } from 'redux';
import movies from './movies';
import selectedMovieId from './selectedMovieId';
import {reducer as formReducer} from 'redux-form';

const reducers = combineReducers({
  movies,
  selectedMovieId,
  form: formReducer
});

export default reducers;
