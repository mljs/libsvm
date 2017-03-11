import {combineReducers} from 'redux';
import SVCPointsReducer from './SVCPointsReducer';
import styleReducer from './styleReducer';
import SVCConfigReducer from './SVCConfigReducer';

export default combineReducers({
    SVCPoints: SVCPointsReducer,
    SVCConfig: SVCConfigReducer,
    style: styleReducer
})