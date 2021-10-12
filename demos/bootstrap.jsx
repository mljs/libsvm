import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'jquery';
import 'tether';
import 'bootstrap';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './containers/App';
import store from './store';
import './style.css';

const app = document.getElementById('app');

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    app,
  );
};

render(App);
