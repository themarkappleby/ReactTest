import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const loggerMiddleware = createLogger();

// reducers
import movies from './reducers/movies';
import selectedMovieId from './reducers/selectedMovieId';

const reducers = combineReducers({movies, selectedMovieId});

export default createStore(reducers, applyMiddleware(
  promiseMiddleware,
  loggerMiddleware
));
