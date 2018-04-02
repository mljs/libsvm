import undoable from 'redux-undo';

import {
  SVR_ADD_POINT,
  SVR_CLEAR_POINTS,
  SVR_UNDO_POINT,
  SVR_REDO_POINT
} from '../actions/types';

const defaultState = {
  points: [
    [
      0.036727294921875,
      0.4996761474609375
    ],
    [
      0.112727294921875,
      0.5036761474609375
    ],
    [
      0.190727294921875,
      0.4956761474609375
    ],
    [
      0.256727294921875,
      0.3636761474609375
    ],
    [
      0.312727294921875,
      0.2676761474609375
    ],
    [
      0.400727294921875,
      0.1376761474609375
    ],
    [
      0.464727294921875,
      0.1116761474609375
    ],
    [
      0.540727294921875,
      0.2176761474609375
    ],
    [
      0.596727294921875,
      0.3616761474609375
    ],
    [
      0.640727294921875,
      0.4856761474609375
    ],
    [
      0.714727294921875,
      0.6316761474609375
    ],
    [
      0.792727294921875,
      0.6976761474609375
    ],
    [
      0.842727294921875,
      0.6116761474609375
    ],
    [
      0.898727294921875,
      0.4976761474609375
    ],
    [
      0.962727294921875,
      0.4956761474609375
    ]
  ]
};

function SVRPointsReducer(state = defaultState, action) {
  switch (action.type) {
    case SVR_ADD_POINT: {
      const newPoint = [action.payload.point.x, action.payload.point.y];
      return {
        ...state,
        points: state.points.concat([newPoint])
      };
    }
    case SVR_CLEAR_POINTS: {
      return {
        ...state,
        points: []
      };
    }
    default:
      return state;
  }
}

export default undoable(SVRPointsReducer, {
  limit: 100,
  undoType: SVR_UNDO_POINT,
  redoType: SVR_REDO_POINT
});
