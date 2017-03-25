import {
    STYLE_BREAKPOINT_UPDATE,
} from './types';

export function updateStyleBreakpoint(bp) {
    return {
        type: STYLE_BREAKPOINT_UPDATE,
        payload: bp
    };
}
