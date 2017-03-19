'use strict';
import {connect} from 'react-redux';
import {addPoint} from '../actions/SVC';
import {getSVCData} from '../selectors/index';
import Canvas from '../components/Canvas';

function mapStateToProps(state) {
    return getSVCData(state);
}


export default connect(mapStateToProps, {addPoint})(Canvas);