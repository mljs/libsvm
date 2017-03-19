'use strict';
import {connect} from 'react-redux';
import {addPoint} from '../actions/SVR';
import {getSVRData} from '../selectors/index';
import Canvas from '../components/Canvas';

function mapStateToProps(state) {
    return getSVRData(state);
}


export default connect(mapStateToProps, {addPoint})(Canvas);