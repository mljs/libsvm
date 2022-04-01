import { useCallback, useMemo, useReducer } from 'react';
import {
  ADD_POINT,
  LABEL_CHANGED,
  CLEAR_POINTS,
  SET_ACTIVE_LABEL,
  UNDO_POINTS,
  REDO_POINTS,
} from '../actions/types';

const initialState = {
  history: {
    before: [],
    after: [],
  },
  activeLabel: 0,
};

function canvasPointsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POINT: {
      const newBefore = [
        ...state.history.before,
        {
          points: state.points,
          labels: state.labels,
        },
      ];
      const newPoint = [action.payload.point.x, action.payload.point.y];
      return {
        ...state,
        points: state.points.concat([newPoint]),
        labels: [...state.labels, state.activeLabel],
        history: {
          after: [],
          before: newBefore,
        },
      };
    }
    case LABEL_CHANGED: {
      return {
        ...state,
        activeLabel: action.payload,
      };
    }
    case CLEAR_POINTS: {
      return {
        ...state,
        points: [],
        labels: [],
      };
    }
    case SET_ACTIVE_LABEL: {
      return {
        ...state,
        activeLabel: action.payload,
      };
    }
    case UNDO_POINTS: {
      const before = state.history.before.slice();
      const newData = before.pop();
      const newAfterItem = {
        points: state.points.slice(),
        labels: state.labels.slice(),
      };
      return {
        ...state,
        history: {
          before,
          after: [...state.history.after, newAfterItem],
        },
        points: newData.points,
        labels: newData.labels,
      };
    }
    case REDO_POINTS: {
      const after = state.history.after.slice();
      const newData = after.pop();
      const newBeforeItem = {
        points: state.points.slice(),
        labels: state.labels.slice(),
      };
      return {
        ...state,
        history: {
          after,
          before: [...state.history.before, newBeforeItem],
        },
        points: newData.points,
        labels: newData.labels,
      };
    }
    default:
      return state;
  }
}

export default function useCanvasPoints(points, labels, colors) {
  const [state, dispatch] = useReducer(canvasPointsReducer, {
    ...initialState,
    points,
    labels,
    colors,
  });
  const addPoint = useCallback((points) => {
    return dispatch({
      type: 'ADD_POINT',
      payload: points,
    });
  }, []);

  const clearPoints = useCallback(() => {
    dispatch({
      type: 'CLEAR_POINTS',
    });
  });

  const setActiveLabel = useCallback((value) => {
    if (value >= colors.length) {
      throw new Error('color out of range');
    }
    dispatch({
      type: SET_ACTIVE_LABEL,
      payload: value,
    });
  });

  const undoPoints = useCallback(() => {
    dispatch({
      type: UNDO_POINTS,
    });
  });

  const redoPoints = useCallback(() => {
    dispatch({
      type: REDO_POINTS,
    });
  });

  const actions = useMemo(() => {
    return {
      addPoint,
      clearPoints,
      setActiveLabel,
      undoPoints,
      redoPoints,
    };
  }, [addPoint, clearPoints]);
  return [state, actions];
}
