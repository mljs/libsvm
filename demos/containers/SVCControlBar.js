import {connect} from 'react-redux';
import ControlBar from '../components/ControlBar';
import {undoPoint, redoPoint, clearPoints} from '../actions/SVC';


function mapDispatchToProps(dispatch) {
    return {
        clear: () => dispatch(clearPoints()),
        undo: () => dispatch(undoPoint()),
        redo: () => dispatch(redoPoint())
    };
}


export default connect(null, mapDispatchToProps)(ControlBar);
