import {SVC_ADD_POINT, SVC_LABEL_CHANGED, SVC_CLEAR_POINTS} from '../actions/types';
import  undoable from 'redux-undo';

const defaultState = {
    points: [],
    labels: [],
    currentLabel: 0
};

function SVCPointsReducer(state = defaultState, action) {
    switch(action.type) {
        case SVC_ADD_POINT: {
            const newPoint = [action.payload.point.x, action.payload.point.y];
            return {
                ...state,
                points: state.points.concat([newPoint]),
                labels: state.labels.concat(state.currentLabel)
            }
        }
        case SVC_LABEL_CHANGED: {
            return {
                ...state,
                currentLabel: action.payload
            }
        }
        case SVC_CLEAR_POINTS: {
            return {
                ...state,
                points: [],
                labels: []
            }
        }
        default:
            return state;
    }
}

export default undoable(SVCPointsReducer, {
    limit: 100
});