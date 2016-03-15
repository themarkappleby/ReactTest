import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import '!style!css!./styles/index.css';
import store from './redux/store';
import App from './components/App/App.jsx';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
