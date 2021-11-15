import React from 'react';
import { getSVRCanvasData } from '../selectors/index';
import Canvas from '../components/Canvas';
import useCanvasPoints from '../hooks/useCanvasPoints';

export default function SVRCanvas(props) {
  const [state, { addPoint }] = useCanvasPoints();

  const canvasProps = getSVRCanvasData(state);
  return <Canvas {...props} {...canvasProps} addPoint={addPoint} />;
}
