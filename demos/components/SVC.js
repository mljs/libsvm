import React from 'react';
import Canvas from './Canvas';
import ChooseLabel from './ChooseLabel';
import ControlBar from './ControlBar';

export default function() {
    return (
        <div>
            <h2>Support vector classification</h2>
            <Canvas style={{imageRendering: 'pixelated'}}/>
            <ChooseLabel/>
            <ControlBar/>
        </div>
    );
}