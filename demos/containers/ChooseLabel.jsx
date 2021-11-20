import React from 'react';

import { CANVAS_RESOLUTION, CANVAS_SCALE_FACTOR } from '../constants';

export default function ChooseLabel(props) {
  const { colors, setActiveLabel, activeLabel } = props;

  // todo: replace with real state
  const currentBreakpoint = 'md';
  const width =
    CANVAS_RESOLUTION[currentBreakpoint] *
    CANVAS_SCALE_FACTOR[currentBreakpoint];

  function renderColorButton(color, idx) {
    return (
      <div
        key={idx}
        style={{ backgroundColor: color, marginBottom: 5 }}
        className={`choose-label-element${
          activeLabel === idx ? ' choose-label-element-active' : ''
        }`}
        onClick={() => setActiveLabel(idx)}
      />
    );
  }

  return (
    <div style={props.style}>
      <div style={{ width }}>
        <div className="choose-label-container">
          {colors.map(renderColorButton)}
        </div>
      </div>
    </div>
  );
}
