import React from 'react';
import Canvas from '../containers/SVRCanvas';
import ControlBar from '../containers/SVRControlBar';
import SVCConfig from '../containers/SVRConfig';

export default function() {
    return (
        <div>
            <h2>Support vector regression</h2>
            <div className="row">
                <div className="col-lg-7 col-xl-7 col-md-12 col-sm-12 col-xs-12">
                    <Canvas style={{imageRendering: 'pixelated', float: 'left'}}/>
                    <ControlBar vertical={true} style={{paddingLeft: 4}}/>
                </div>
                <div className="col-lg-5 col-xl-5 col-md-12 col-sm-12 col-xs-12">
                    <SVCConfig/>
                </div>
            </div>
        </div>
    );
}