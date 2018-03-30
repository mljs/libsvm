import {createSelectorCreator, defaultMemoize} from 'reselect';
import {isEqual} from 'lodash-es';
import ConfusionMatrix from 'ml-confusion-matrix';
import {LABELS_COLORS, ONE_CLASS_LABEL_COLORS, TWO_CLASS_LABEL_COLORS} from '../constants';
import {CANVAS_RESOLUTION, CANVAS_SCALE_FACTOR} from '../constants';
import {grid, getHyperParameters} from '../util/fields';

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
        let acc = null;
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
                svm.free();
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
            svm.free();
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

export const findHyperParameters = createSelector([
    getSVCPoints, getSVCConfig
], function(SVCPoints, SVCConfig) {
        let bestAcc = 0;
        let bestParams = null;
        let hyperParams = getHyperParameters(SVCConfig.type, SVCConfig.kernel);
        grid(SVCConfig.type, SVCConfig.kernel, function(params, hyperParams) {
            const options = {
                type: SVCConfig.type,
                kernel: SVCConfig.kernel,
                quiet: true
            };
            for(let i=0; i<hyperParams.length; i++) {
                options[hyperParams[i].name] = params[i];
            }
            const svm = new SVM(options);
            const predictions = svm.crossValidation(SVCPoints.points, SVCPoints.labels, SVCPoints.labels.length);
            const CM = ConfusionMatrix.fromLabels(SVCPoints.labels, predictions);
            const acc = CM.accuracy;
            if(acc > bestAcc) {
                bestAcc = acc;
                bestParams = params;
            }
        });
        return {
            acc: bestAcc,
            hyperParams: hyperParams,
            values: bestParams
        };
    }
);
