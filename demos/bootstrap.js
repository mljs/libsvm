import React from 'react';
import ReactDom from 'react-dom';
import App from './containers/App';
import store from './store';
import {Provider} from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import 'font-awesome-webpack';

const app = document.getElementById('app');

ReactDom.render((
    <Provider store={store}>
        <App/>
    </Provider>
), app);