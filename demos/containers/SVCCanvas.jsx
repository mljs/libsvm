
import { connect } from 'react-redux';

import { addPoint } from '../actions/SVC';
import { getSVCData, getLabelColors } from '../selectors/index';
import Canvas from '../components/Canvas';

function mapStateToProps(state) {
  const props = getSVCData(state);
  props.labelColors = getLabelColors(state);
  return props;
}


export default connect(mapStateToProps, { addPoint })(Canvas);
