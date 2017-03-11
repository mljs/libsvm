import {
    STYLE_BREAKPOINT_UPDATE,
    SVC_ADD_POINT,
    SVC_LABEL_CHANGED,
    SVC_CLEAR_POINTS,
    SVC_UNDO_POINTS,
    SVC_REDO_POINTS
} from './types';

export function updateStyleBreakpoint(bp) {
    return {
        type: STYLE_BREAKPOINT_UPDATE,
        payload: bp
    }
}

export function addPoint(pointData) {
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

export function clearPoints() {
    return {
        type: SVC_CLEAR_POINTS
    }
}

export function undoPoints() {
    return {
        type: SVC_UNDO_POINTS
    }
}

export function redoPoints() {
    return {
        type: SVC_REDO_POINTS
    }
}