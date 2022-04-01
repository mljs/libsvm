import { CANVAS_RESOLUTION, CANVAS_SCALE_FACTOR } from '../constants';

export function getSVCCanvasData(SVCPoints, config, currentBreakpoint = 'md') {
  let startTime, endTime;
  const canvasSize = CANVAS_RESOLUTION[currentBreakpoint];
  let points = [];
  let background = [];
  let SVs = [];
  const line = [];
  if (config) {
    startTime = Date.now();
    points = SVCPoints.points.map((p, idx) => {
      return {
        label: SVCPoints.labels[idx],
        x: p[0] * canvasSize,
        y: p[1] * canvasSize,
      };
    });
    if (points.length) {
      const svm = new SVM({ ...config, quiet: true });
      svm.train(SVCPoints.points, SVCPoints.labels);
      SVs = svm.getSVIndices();

      for (let i = 0; i < canvasSize; i++) {
        for (let j = 0; j < canvasSize; j++) {
          let val = svm.predictOne([j / canvasSize, i / canvasSize]);
          if (config.type === SVM.SVM_TYPES.ONE_CLASS) {
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
    scale: CANVAS_SCALE_FACTOR[currentBreakpoint],
    info: startTime ? `${endTime - startTime} ms` : '',
    SVs,
    line,
  };
}

export function getSVRCanvasData(
  SVRPoints,
  SVRConfig,
  currentBreakpoint = 'md',
) {
  let startTime, endTime;
  const canvasSize = CANVAS_RESOLUTION[currentBreakpoint];
  let points = [];
  let background = [];
  let line = [];
  let SVs = [];
  if (SVRConfig) {
    startTime = Date.now();
    points = SVRPoints.points.map((p) => {
      return {
        label: 0,
        x: p[0] * canvasSize,
        y: p[1] * canvasSize,
      };
    });
    if (points.length) {
      const svm = new SVM({ ...SVRConfig, quiet: true });
      svm.train(
        SVRPoints.points.map((p) => [p[0]]),
        SVRPoints.points.map((p) => p[1]),
      );
      SVs = svm.getSVIndices();

      line = svm.predict(
        Array.from({ length: canvasSize }).map((v, i) => [i / canvasSize]),
      );
    }
  }

  endTime = Date.now();
  return {
    width: canvasSize,
    height: canvasSize,
    background,
    points,
    scale: CANVAS_SCALE_FACTOR[currentBreakpoint],
    info: startTime ? `${endTime - startTime} ms` : '',
    SVs,
    line,
  };
}
