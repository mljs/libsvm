import { createSelector } from 'reselect';
import {CANVAS_RESOLUTION, CANVAS_SCALE_FACTOR, LABELS_COLORS} from '../constants';
import SVM from '../..';

const getSVCConfig = state => state.SVCConfig;
const getSVCPoints = state => state.SVCPoints;
const getStyle = state => state.style;

export const getSVCData = createSelector(
    [getSVCConfig, getSVCPoints, getStyle],
    (SVCConfig, SVCPoints, style) => {
        console.time('SVC');
        const canvasSize = CANVAS_RESOLUTION[style.currentBreakpoint];

        const points = SVCPoints.present.points.map((p, idx) => {
            return {
                label: SVCPoints.present.labels[idx],
                SV: true,
                x: p[0] * canvasSize,
                y: p[1] * canvasSize,
                size: CANVAS_RESOLUTION[style.currentBreakpoint],
            }
        });
        const background = [];
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
            console.log(background);
        }


        console.timeEnd('SVC');

        return {
            width: CANVAS_RESOLUTION[style.currentBreakpoint],
            height: CANVAS_RESOLUTION[style.currentBreakpoint],
            background,
            points,
            scale: CANVAS_SCALE_FACTOR[style.currentBreakpoint]
        }
    }
);
