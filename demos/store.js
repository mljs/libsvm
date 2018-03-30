import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers/reducers';
import thunkMiddleware from 'redux-thunk'

const middleware = [thunkMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

export default createStore(reducers, enhancer);
