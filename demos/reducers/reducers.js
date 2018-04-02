import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import SVCPointsReducer from './SVCPointsReducer';
import SVRPointsReducer from './SVRPointsReducer';
import styleReducer from './styleReducer';

export default combineReducers({
  SVCPoints: SVCPointsReducer,
  SVRPoints: SVRPointsReducer,
  style: styleReducer,
  form: formReducer
});
