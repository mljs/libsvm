import {
    SVC_ADD_POINT,
    SVC_LABEL_CHANGED,
    SVC_CLEAR_POINTS,
    SVC_UNDO_POINT,
    SVC_REDO_POINT
} from '../actions/types';
import undoable from 'redux-undo';

const defaultState = {
    points: [],
    labels: [],
    currentLabel: 0
};

function SVCPointsReducer(state = defaultState, action) {
    switch (action.type) {
        case SVC_ADD_POINT: {
            const newPoint = [action.payload.point.x, action.payload.point.y];
            return {
                ...state,
                points: state.points.concat([newPoint]),
                labels: state.labels.concat(state.currentLabel)
            };
        }
        case SVC_LABEL_CHANGED: {
            return {
                ...state,
                currentLabel: action.payload
            };
        }
        case SVC_CLEAR_POINTS: {
            return {
                ...state,
                points: [
                    [
                        0.27666666666666667,
                        0.6866666666666666
                    ],
                    [
                        0.6066666666666667,
                        0.28
                    ]
                ],
                labels: [
                    1,
                    2
                ]
            };
        }
        default:
            return state;
    }
}

export default undoable(SVCPointsReducer, {
    limit: 100,
    undoType: SVC_UNDO_POINT,
    redoType: SVC_REDO_POINT
});
