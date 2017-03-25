import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import store from './store';
import {Provider} from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'tether';
import 'bootstrap';
import './style.css';
import 'font-awesome-webpack';

const app = document.getElementById('app');

import {AppContainer} from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        app
    );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./containers/App', () => {
        render(App);
    });
}


// ReactDom.render((
//     <Provider store={store}>
//         <App/>
//     </Provider>
// ), app);
