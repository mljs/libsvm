import React, {Component} from 'react';
import {connect} from 'react-redux';
import SVM from '../..';
import {CANVAS_RESOLUTION, CANVAS_SCALE_FACTOR, LABELS_COLORS} from '../constants';
const chroma = require('chroma-js');
import {addPoint} from '../actions/index';

const colorsRgb = LABELS_COLORS.map(c => chroma(c).rgb());
const colorsBrighter = LABELS_COLORS.map(c => chroma(c).brighten().hex());

const classToLabel = {
    "-1": 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4
};

const labelToClass = {
    0: -1,
    1: 1,
    2: 2,
    3: 3,
    4: 4
};

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.onCanvasClick = this.onCanvasClick.bind(this);
    }

    componentDidMount() {
        this.ctx = this.canvas.getContext('2d');
        this.ctx.imageSmoothingEnabled = false;
        this.draw();
    }

    componentDidUpdate() {
        this.draw();
    }

    onCanvasClick(event) {
        const targetRect = event.target.getBoundingClientRect();
        const normalized = {
            x: (event.clientX - targetRect.left) / (this.props.width * this.props.scale),
            y: (event.clientY - targetRect.top) / (this.props.height * this.props.scale)
        };
        this.props.addPoint({
            point: normalized
        });
    }

    render() {
        console.log('render');
        const realWidth = this.props.width * this.props.scale;
        const realHeight = this.props.height * this.props.scale;
        return (
            <div>
                <canvas
                    onClick={this.onCanvasClick}
                    width={realWidth}
                    height={realHeight}
                    ref={c => this.canvas = c}
                    style={this.props.style}
                />
            </div>
        );
    }

    draw() {
        const {width, height, scale} = this.props;
        if (this.props.background.length !== width * height) {
            this.ctx.fillStyle = 'lightgray';
            this.ctx.fillRect(0, 0, width * this.props.scale, height * scale);
            return;
        }

        const realWidth = width * scale;
        const realHeight = height * scale;
        const data = this.ctx.createImageData(realWidth, realHeight);
        for (var i = 0; i < width; i++) {
            for (var j = 0; j < height; j++) {
                const px = (j * width + i);
                const label = this.props.background[px];

                for (var k = 0; k < scale; k++) {
                    const idx = 4 * scale * (width * (j * scale + k) + i);
                    // const idx = (j * width * scale * scale +  k * scale * width + i * scale ) * 4;
                    for (var l = 0; l < scale; l++) {
                        const idxx = idx + l * 4;
                        data.data[idxx] = colorsRgb[label][0];
                        data.data[idxx + 1] = colorsRgb[label][1];
                        data.data[idxx + 2] = colorsRgb[label][2];
                        data.data[idxx + 3] = 255;
                    }
                }


            }
        }
        this.ctx.putImageData(data, 0, 0);
        const radius = scale * width / 80;
        this.ctx.imageSmoothingEnabled = false;
        for (var i = 0; i < this.props.points.length; i++) {
            const point = this.props.points[i];
            this.ctx.beginPath();
            this.ctx.arc(point.x * scale, point.y * scale, radius, 0, 2 * Math.PI, false);
            this.ctx.fillStyle = colorsBrighter[point.label];
            this.ctx.fill();
            this.ctx.lineWidth = radius / 4;
            this.ctx.strokeStyle = '#003300';
            this.ctx.stroke();
        }

        console.log('drawn');
    }
}

function mapStateToProps(state) {
    console.time('SVC');
    const canvasSize = CANVAS_RESOLUTION[state.style.currentBreakpoint];

    const points = state.SVC.points.map((p, idx) => {
        return {
            label: state.SVC.labels[idx],
            SV: true,
            x: p[0] * canvasSize,
            y: p[1] * canvasSize,
            size: CANVAS_RESOLUTION[state.style.currentBreakpoint],
        }
    });
    const background = [];
    if(points.length) {
        const svm = new SVM({
            cost: state.SVC.config.cost,
            gamma: state.SVC.config.gamma,
        });
        svm.train(state.SVC.points, state.SVC.labels);

        for (var i = 0; i < canvasSize; i++) {
            for (var j = 0; j < canvasSize; j++) {
                background.push(svm.predictOne([j / canvasSize, i / canvasSize]));
            }
        }
        console.log(background);
    }


    console.timeEnd('SVC');

    return {
        width: CANVAS_RESOLUTION[state.style.currentBreakpoint],
        height: CANVAS_RESOLUTION[state.style.currentBreakpoint],
        background,
        points,
        scale: CANVAS_SCALE_FACTOR[state.style.currentBreakpoint]
    }
}


export default connect(mapStateToProps, {addPoint})(Canvas);