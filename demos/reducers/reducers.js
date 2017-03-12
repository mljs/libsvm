import {combineReducers} from 'redux';
import SVCPointsReducer from './SVCPointsReducer';
import styleReducer from './styleReducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    SVCPoints: SVCPointsReducer,
    style: styleReducer,
    form: formReducer
})