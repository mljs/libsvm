import React from 'react';

import ControlBar from '../containers/SVRControlBar';
import SVCConfig from '../containers/SVRConfig';
import useCanvasPoints from '../hooks/useCanvasPoints';
import { FormProvider, useForm } from 'react-hook-form';
import {
  SVR_INIT_LABELS,
  SVR_INIT_POINTS,
  SVR_LABEL_COLORS,
} from '../constants';
import SVRCanvas from '../containers/SVRCanvas';

export default function SVR() {
  const methods = useForm({
    shouldUseNativeValidation: true,
    defaultValues: {
      type: '3',
      kernel: '2',
      cost: 1,
      gamma: 0.01,
      nu: 0.5,
      epsilon: 0.1,
      degree: 1,
    },
  });
  const [state, actions] = useCanvasPoints(
    SVR_INIT_POINTS,
    SVR_INIT_LABELS,
    SVR_LABEL_COLORS,
  );

  return (
    <FormProvider {...methods}>
      <h2>Support vector regression</h2>
      <div className="row justify-content-end mt-4 mb-4">
        <div className="col-lg-7 col-xl-7 col-md-12 col-sm-12 col-xs-12">
          <SVRCanvas
            style={{ imageRendering: 'pixelated', float: 'left' }}
            state={state}
            actions={actions}
          />
          <ControlBar
            vertical={true}
            style={{ paddingLeft: 4 }}
            helpTitle="Support vector regression canvas"
            help="SVM will try to fit each drawn circle with a curve. The drawn circles represent the training set. The line represents the predictions for each possible x (abscissa)."
          />
        </div>
        <div className="col-lg-5 col-xl-5 col-md-12 col-sm-12 col-xs-12">
          <SVCConfig />
        </div>
      </div>
    </FormProvider>
  );
}
