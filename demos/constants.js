import {getDistinctColors} from './util';

export const CANVAS_RESOLUTION = {
    xs: 50,
    sm: 100,
    md: 100,
    lg: 100,
    xl: 125
};

export const CANVAS_SCALE_FACTOR = {
    xs: 4,
    sm: 3,
    md: 4,
    lg: 4,
    xl: 4
};

export const LABELS_DISTINCT_COLORS = 5;

export const LABELS_COLORS = getDistinctColors(LABELS_DISTINCT_COLORS);
export const ONE_CLASS_LABEL_COLORS = getDistinctColors(1);
export const TWO_CLASS_LABEL_COLORS = getDistinctColors(2);
