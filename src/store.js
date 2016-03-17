import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/index';

const loggerMiddleware = createLogger();

export default createStore(reducers, compose(
  applyMiddleware(
    promiseMiddleware,
    loggerMiddleware
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
