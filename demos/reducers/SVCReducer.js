import {SVC_ADD_POINT, SVC_LABEL_CHANGED} from '../actions/types';

const defaultState = {
    config: {
        gamma: 1,
        cost: 1
    },
    points: [],
    labels: [],
    currentLabel: 0
};

export default function SVCReducer(state = defaultState, action) {
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
        default:
            return state;
    }
}