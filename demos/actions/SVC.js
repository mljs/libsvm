import {
    SVC_ADD_POINT,
    SVC_LABEL_CHANGED,
    SVC_CLEAR_POINTS,
    SVC_UNDO_POINT,
    SVC_REDO_POINT,
    SVC_FIND_HYPERPAREMETERS
} from './types';

import store from '../store';
import {findHyperParameters as findHyperSelector} from '../selectors/index';

import {change} from 'redux-form';

export function addPoint(pointData) {
    return {
        type: SVC_ADD_POINT,
        payload: pointData
    };
}

export function changeLabel(label) {
    return {
        type: SVC_LABEL_CHANGED,
        payload: label
    };
}

export function clearPoints() {
    return {
        type: SVC_CLEAR_POINTS
    };
}

export function undoPoint() {
    return {
        type: SVC_UNDO_POINT
    };
}

export function redoPoint() {
    return {
        type: SVC_REDO_POINT
    };
}

export function findHyperParameters() {
    return function (dispatch) {
        const state = store.getState();
        const result = findHyperSelector(state);
        for (let i = 0; i < result.hyperParams.length; i++) {
            console.log(result.hyperParams[i].name, result.values[i]);
            dispatch(change('SVCConfig', result.hyperParams[i].name, result.values[i]));
        }
    };
}
