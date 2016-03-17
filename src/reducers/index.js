import { combineReducers } from 'redux';
import movies from './movies';
import selectedMovieId from './selectedMovieId';
import {reducer as formReducer} from 'redux-form';
import {routerReducer} from 'react-router-redux';

const reducers = combineReducers({
  movies,
  selectedMovieId,
  form: formReducer,
  routing: routerReducer
});

export default reducers;
