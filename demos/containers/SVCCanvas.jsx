import { getLabelColors, getSVCCanvasData } from '../selectors/index';
import Canvas from '../components/Canvas';
import useCanvasPoints from '../hooks/useCanvasPoints';

export default function SVCCanvas(props) {
  const [state, { addPoint }] = useCanvasPoints();

  const canvasProps = getSVCCanvasData(state);
  const labelColors = getLabelColors(state);
  return (
    <Canvas
      {...props}
      {...canvasProps}
      addPoint={addPoint}
      labelColors={labelColors}
    />
  );
}
