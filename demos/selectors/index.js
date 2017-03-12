import { createSelector } from 'reselect';
import {CANVAS_RESOLUTION, CANVAS_SCALE_FACTOR} from '../constants';
import SVM from '../..';

const getSVCConfig = state => state.form.SVCConfig;
const getSVCPoints = state => state.SVCPoints;
const getStyle = state => state.style;

export const getSVCData = createSelector(
    [getSVCConfig, getSVCPoints, getStyle],
    (SVCConfig, SVCPoints, style) => {
        const canvasSize = CANVAS_RESOLUTION[style.currentBreakpoint];
        let points = [];
        let background = [];
        if(SVCConfig) {
            SVCConfig = SVCConfig.values;
            console.time('SVC');
            points = SVCPoints.present.points.map((p, idx) => {
                return {
                    label: SVCPoints.present.labels[idx],
                    SV: true,
                    x: p[0] * canvasSize,
                    y: p[1] * canvasSize,
                    size: CANVAS_RESOLUTION[style.currentBreakpoint],
                }
            });
            if(points.length) {
                const svm = new SVM({
                    cost: SVCConfig.cost,
                    gamma: SVCConfig.gamma,
                });
                svm.train(SVCPoints.present.points, SVCPoints.present.labels);

                for (var i = 0; i < canvasSize; i++) {
                    for (var j = 0; j < canvasSize; j++) {
                        background.push(svm.predictOne([j / canvasSize, i / canvasSize]));
                    }
                }
            }
            console.timeEnd('SVC');
        }


        return {
            width: canvasSize,
            height: canvasSize,
            background,
            points,
            scale: CANVAS_SCALE_FACTOR[style.currentBreakpoint]
        }
    }
);
