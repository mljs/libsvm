import React from 'react';

import SVCCanvas from '../containers/SVCCanvas';
import ControlBar from '../components/ControlBar';
import OneClassSVCConfig from '../containers/OneClassSVCConfig';
import {
  ONE_CLASS_LABEL_COLORS,
  ONE_CLASS_SVC_INIT_LABELS,
  SVC_INIT_POINTS,
} from '../constants';
import useCanvasPoints from '../hooks/useCanvasPoints';

import { useForm, FormProvider } from 'react-hook-form';

export default function SVC() {
  const methods = useForm({
    shouldUseNativeValidation: true,
    defaultValues: {
      type: '2',
      kernel: '2',
      cost: 1,
      nu: 0.5,
      gamma: 0.01,
      degree: 1,
      epsilon: 0.1,
    },
  });
  const [state, actions] = useCanvasPoints(
    SVC_INIT_POINTS,
    ONE_CLASS_SVC_INIT_LABELS,
    ONE_CLASS_LABEL_COLORS,
  );
  return (
    <FormProvider {...methods}>
      <h2>One-class support vector classification</h2>
      <div className="row justify-content-end mt-4 mb-4">
        <div className="col-lg-7 col-xl-7 col-md-12">
          <SVCCanvas
            style={{ imageRendering: 'pixelated', float: 'left' }}
            state={state}
            actions={actions}
          />
          <ControlBar
            vertical={true}
            style={{ paddingLeft: 4 }}
            helpTitle="Support vector classification canvas"
            help="Each sample is a 2-dimensional data point [x, y] that is represented by a circle. All samples are used to train the SVM classifier. A circle with a thick border means it is a support vector.The color of each pixel in the background represents the decision of the classifier at the pixel's coordinates."
            clear={actions.clearPoints}
            undo={actions.undoPoints}
            redo={actions.redoPoints}
            canUndo={state.history.before.length > 0}
            canRedo={state.history.after.length > 0}
          />
        </div>
        <div className="clearfix hidden-sm-up" />
        <div className="col-lg-5 col-xl-5 col-md-12 mt-sm-3 col">
          <OneClassSVCConfig />
        </div>
      </div>
    </FormProvider>
  );
}
