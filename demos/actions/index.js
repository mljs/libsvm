import {STYLE_BREAKPOINT_UPDATE} from './types';

export function updateStyleBreakpoint(bp) {
    console.log('update breakpoint')
    return {
        type: STYLE_BREAKPOINT_UPDATE,
        payload: bp
    }
}
