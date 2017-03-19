import {combineReducers} from 'redux';
import SVCPointsReducer from './SVCPointsReducer';
import SVRPointsReducer from './SVRPointsReducer';
import styleReducer from './styleReducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    SVCPoints: SVCPointsReducer,
    SVRPoints: SVRPointsReducer,
    style: styleReducer,
    form: formReducer
})