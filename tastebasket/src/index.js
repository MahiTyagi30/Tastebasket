import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'; // Your Redux store configuration
import App from './App';
import { app } from './firebase';

ReactDOM.render(
  <Provider store={store} app={app}>
    <App />
  </Provider>,
  document.getElementById('root')
);
