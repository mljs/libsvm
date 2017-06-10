import {createSelectorCreator, defaultMemoize} from 'reselect';
import {isEqual, countBy, reduce, mapValues} from 'lodash-es';
import {LABELS_COLORS, ONE_CLASS_LABEL_COLORS, TWO_CLASS_LABEL_COLORS} from '../constants';

import {CANVAS_RESOLUTION, CANVAS_SCALE_FACTOR} from '../constants';

const createSelector = createSelectorCreator(defaultMemoize, (val1, val2) => {
    return val1 === val2 || isEqual(val1, val2);
});

const getSVCConfig = state => state.form.SVCConfig ? state.form.SVCConfig.values : undefined;
const getSVCPoints = state => state.SVCPoints.present;
const getStyle = state => state.style;
const getSVRConfig = state => state.form.SVRConfig ? state.form.SVRConfig.values : undefined;
const getSVRPoints = state => state.SVRPoints.present;

export const getLabelColors = createSelector(
    [getSVCConfig],
    SVCConfig => {
        if (SVCConfig && SVCConfig.type === SVM.SVM_TYPES.ONE_CLASS) {
            return TWO_CLASS_LABEL_COLORS;
        } else {
            return LABELS_COLORS;
        }
    }
);

export const getLabelChooseColors = createSelector(
    [getSVCConfig],
    SVCConfig => {
        if (SVCConfig && SVCConfig.type === SVM.SVM_TYPES.ONE_CLASS) {
            return ONE_CLASS_LABEL_COLORS;
        } else {
            return LABELS_COLORS;
        }
    }
);

export const getSVCData = createSelector(
    [getSVCConfig, getSVCPoints, getStyle],
    (SVCConfig, SVCPoints, style) => {
        let startTime, endTime;
        const canvasSize = CANVAS_RESOLUTION[style.currentBreakpoint];
        let points = [];
        let background = [];
        let SVs = [];
        const line = [];
        if (SVCConfig) {
            startTime = Date.now();
            points = SVCPoints.points.map((p, idx) => {
                return {
                    label: SVCPoints.labels[idx],
                    x: p[0] * canvasSize,
                    y: p[1] * canvasSize
                };
            });
            if (points.length) {
                if (SVCConfig.weight) {
                    const classes = countBy(SVCPoints.labels);
                    const total = reduce(classes, (sum, n) => sum + n, 0);
                    SVCConfig.weight = mapValues(classes, c => c / total);
                } else {
                    SVCConfig.weight = null;
                }
                const svm = new SVM({...SVCConfig, quiet: true});
                svm.train(SVCPoints.points, SVCPoints.labels);
                SVs = svm.getSVIndices();

                for (let i = 0; i < canvasSize; i++) {
                    for (let j = 0; j < canvasSize; j++) {
                        let val = svm.predictOne([j / canvasSize, i / canvasSize]);
                        if (SVCConfig.type === SVM.SVM_TYPES.ONE_CLASS) {
                            if (val < 0) {
                                val = 1;
                            } else {
                                val = 0;
                            }
                        }
                        background.push(val);
                    }
                }
            }
            endTime = Date.now();
        }


        return {
            width: canvasSize,
            height: canvasSize,
            background,
            points,
            scale: CANVAS_SCALE_FACTOR[style.currentBreakpoint],
            info: startTime ? (endTime - startTime) + ' ms' : '',
            SVs,
            line
        };
    }
);

export const getSVRData = createSelector([
    getSVRConfig, getSVRPoints, getStyle
], (SVRConfig, SVRPoints, style) => {
    let startTime, endTime;
    const canvasSize = CANVAS_RESOLUTION[style.currentBreakpoint];
    let points = [];
    let background = [];
    let line = [];
    let SVs = [];
    if (SVRConfig) {
        startTime = Date.now();
        points = SVRPoints.points.map(p => {
            return {
                label: 0,
                x: p[0] * canvasSize,
                y: p[1] * canvasSize
            };
        });
        if (points.length) {
            const svm = new SVM({...SVRConfig, quiet: true});
            svm.train(SVRPoints.points.map(p => [p[0]]), SVRPoints.points.map(p => p[1]));
            SVs = svm.getSVIndices();

            line = svm.predict(Array.from({length: canvasSize}).map((v, i) => [i / canvasSize]));
        }
    }

    endTime = Date.now();
    return {
        width: canvasSize,
        height: canvasSize,
        background,
        points,
        scale: CANVAS_SCALE_FACTOR[style.currentBreakpoint],
        info: startTime ? (endTime - startTime) + ' ms' : '',
        SVs,
        line
    };
});

