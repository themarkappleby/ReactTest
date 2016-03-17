import promiseMiddleware from 'redux-promise';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/index';

export default createStore(reducers, compose(
  applyMiddleware(promiseMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
