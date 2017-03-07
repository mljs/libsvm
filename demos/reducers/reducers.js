import {combineReducers} from 'redux';
import SVCReducer from './SVCReducer';
import styleReducer from './styleReducer';

export default combineReducers({
    SVC: SVCReducer,
    style: styleReducer
})