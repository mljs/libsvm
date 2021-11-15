import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'jquery';
import 'tether';
import 'bootstrap';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import store from './store';
import './style.css';

const App = React.lazy(async () => {
  await import('../dist/browser/wasm/libsvm');
  const SVM = await libsvm;
  window.SVM = SVM;
  return import('./containers/App');
});

const app = document.getElementById('app');

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Suspense fallback={null}>
        <Component />
      </Suspense>
    </Provider>,
    app,
  );
};

render(App);
