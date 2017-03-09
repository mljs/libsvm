import {STYLE_BREAKPOINT_UPDATE, SVC_ADD_POINT, SVC_LABEL_CHANGED} from './types';

export function updateStyleBreakpoint(bp) {
    return {
        type: STYLE_BREAKPOINT_UPDATE,
        payload: bp
    }
}

export function addPoint(pointData) {
    console.log(pointData);
    return {
        type: SVC_ADD_POINT,
        payload: pointData
    }
}

export function changeLabel(label) {
    return {
        type: SVC_LABEL_CHANGED,
        payload: label
    }
}