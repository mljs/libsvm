import {getDistinctColors} from './util';

// Large screens are considered to use more powerful devices
// So they have a larger resolution (and a smaller scale factor)
export const CANVAS_RESOLUTION = {
    xs: 50,
    sm: 100,
    md: 100,
    lg: 200,
    xl: 250
};

export const CANVAS_SCALE_FACTOR = {
    xs: 4,
    sm: 3,
    md: 4,
    lg: 2,
    xl: 2
};

export const LABELS_DISTINCT_COLORS = 5;

export const LABELS_COLORS = getDistinctColors(LABELS_DISTINCT_COLORS);
export const ONE_CLASS_LABEL_COLORS = getDistinctColors(1);
export const TWO_CLASS_LABEL_COLORS = getDistinctColors(2);
