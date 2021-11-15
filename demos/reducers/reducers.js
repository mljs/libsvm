import { combineReducers } from 'redux';

import SVCPointsReducer from './SVCPointsReducer';
import SVRPointsReducer from './SVRPointsReducer';
import styleReducer from './styleReducer';

export default combineReducers({
  SVCPoints: SVCPointsReducer,
  SVRPoints: SVRPointsReducer,
  style: styleReducer,
});
