import {combineReducers} from 'redux';
import SVCPointsReducer from './SVCPointsReducer';
import styleReducer from './styleReducer';
import SVCConfigReducer from './SVCConfigReducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    SVCPoints: SVCPointsReducer,
    SVCConfig: SVCConfigReducer,
    style: styleReducer,
    form: formReducer
})