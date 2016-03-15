import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const loggerMiddleware = createLogger();

// reducers
import movies from './reducers/movies';
import selectedMovieId from './reducers/selectedMovieId';

const reducers = combineReducers({movies, selectedMovieId});

export default createStore(reducers, applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
));
