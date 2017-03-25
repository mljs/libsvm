import {
    SVR_ADD_POINT,
    SVR_CLEAR_POINTS,
    SVR_UNDO_POINT,
    SVR_REDO_POINT
} from './types';

export function addPoint(pointData) {
    return {
        type: SVR_ADD_POINT,
        payload: pointData
    };
}

export function clearPoints() {
    return {
        type: SVR_CLEAR_POINTS
    };
}

export function undoPoint() {
    return {
        type: SVR_UNDO_POINT
    };
}

export function redoPoint() {
    return {
        type: SVR_REDO_POINT
    };
}
