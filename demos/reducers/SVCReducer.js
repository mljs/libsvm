import {SVC_ADD_POINT} from '../actions/types';

const defaultState = {
    config: {
        gamma: 1,
        cost: 1
    },
    points: [],
    labels: []
};

export default function SVCReducer(state = defaultState, action) {
    switch(action.type) {
        case SVC_ADD_POINT: {
            const newPoint = [action.payload.point.x, action.payload.point.y];
            return {
                ...state,
                points: state.points.concat([newPoint]),
                labels: state.labels.concat(action.payload.label)
            }
        }
        default:
            return state;
    }
}