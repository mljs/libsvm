import React from 'react';
import Canvas from '../containers/Canvas';
import ChooseLabel from '../containers/ChooseLabel';
import ControlBar from '../containers/ControlBar';

export default function() {
    return (
        <div>
            <h2>Support vector classification</h2>
            <Canvas style={{imageRendering: 'pixelated', float: 'left'}}/>
            <ControlBar vertical={true} style={{paddingLeft: 4}}/>
            <ChooseLabel style={{clear: 'both', paddingTop: 4}} />
        </div>
    );
}