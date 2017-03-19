import {
    SVR_ADD_POINT,
    SVR_CLEAR_POINTS,
    SVR_UNDO_POINT,
    SVR_REDO_POINT
} from '../actions/types';
import  undoable from 'redux-undo';

const defaultState = {
    points: []
};

function SVRPointsReducer(state = defaultState, action) {
    switch(action.type) {
        case SVR_ADD_POINT: {
            const newPoint = [action.payload.point.x, action.payload.point.y];
            return {
                ...state,
                points: state.points.concat([newPoint])
            }
        }
        case SVR_CLEAR_POINTS: {
            return {
                ...state,
                points: []
            }
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