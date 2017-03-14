import { createSelectorCreator, defaultMemoize } from 'reselect';
import isEqual from 'lodash.isequal';
import {CANVAS_RESOLUTION, CANVAS_SCALE_FACTOR} from '../constants';
import SVM from '../..';

const createSelector = createSelectorCreator(defaultMemoize, (val1, val2) => {
    return val1 === val2 || isEqual(val1, val2);
});

const getSVCConfig = state => state.form.SVCConfig ? state.form.SVCConfig.values : undefined;
const getSVCPoints = state => state.SVCPoints.present;
const getStyle = state => state.style;

export const getSVCData = createSelector(
    [getSVCConfig, getSVCPoints, getStyle],
    (SVCConfig, SVCPoints, style) => {
        console.log('abc');
        console.log(SVCConfig, SVCPoints, style);
        let startTime, endTime;
        const canvasSize = CANVAS_RESOLUTION[style.currentBreakpoint];
        let points = [];
        let background = [];
        if(SVCConfig) {
            startTime = Date.now();
            points = SVCPoints.points.map((p, idx) => {
                return {
                    label: SVCPoints.labels[idx],
                    SV: true,
                    x: p[0] * canvasSize,
                    y: p[1] * canvasSize,
                    size: CANVAS_RESOLUTION[style.currentBreakpoint],
                }
            });
            if(points.length) {
                const svm = new SVM({...SVCConfig, quiet: true});
                svm.train(SVCPoints.points, SVCPoints.labels);

                for (var i = 0; i < canvasSize; i++) {
                    for (var j = 0; j < canvasSize; j++) {
                        background.push(svm.predictOne([j / canvasSize, i / canvasSize]));
                    }
                }
            }
            endTime = Date.now()
        }


        return {
            width: canvasSize,
            height: canvasSize,
            background,
            points,
            scale: CANVAS_SCALE_FACTOR[style.currentBreakpoint],
            info: startTime ? (endTime - startTime) + ' ms' : ''
        }
    }
);
