import {STYLE_BREAKPOINT_UPDATE} from '../actions/types';

const defaultState = {
    currentBreakpoint: 'md'
};

export default function(state=defaultState, action) {
    switch(action.type) {
        case STYLE_BREAKPOINT_UPDATE: {
            if(action.payload === state.currentBreakpoint) {
                return state;
            } else {
                return {...state, currentBreakpoint: action.payload}
            }
        }
        default: {
            return state;
        }
    }
}