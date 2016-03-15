import { createStore, combineReducers } from 'redux';

// reducers
import movies from './reducers/movies';
import selectedMovieId from './reducers/selectedMovieId';

const reducers = combineReducers({movies, selectedMovieId});

export default createStore(reducers);
