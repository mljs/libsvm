import { connect } from 'react-redux';

import ControlBar from '../components/ControlBar';
import { clearPoints, undoPoint, redoPoint } from '../actions/SVR';


function mapDispatchToProps(dispatch) {
  return {
    clear: () => dispatch(clearPoints()),
    undo: () => dispatch(undoPoint()),
    redo: () => dispatch(redoPoint())
  };
}


export default connect(null, mapDispatchToProps)(ControlBar);
