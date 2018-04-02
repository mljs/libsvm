import {
  SVC_ADD_POINT,
  SVC_LABEL_CHANGED,
  SVC_CLEAR_POINTS,
  SVC_UNDO_POINT,
  SVC_REDO_POINT
} from './types';

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
