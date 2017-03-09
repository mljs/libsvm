import {SVC_ADD_POINT} from '../actions/types';

const defaultState = {
    config: {
        gamma: 1,
        cost: 1
    },
    points: [[0.5, 0.7],[0.2,0.4],[0.7, 0.3],[-0.5, -0.5],[-0.7, 0.1],[0, -0.4]],
    labels: [1,1,1,-1,-1,-1]
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