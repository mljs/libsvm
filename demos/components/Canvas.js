import React, {Component} from 'react';
import {connect} from 'react-redux';
import SVM from '../..';
import {CANVAS_RESOLUTION, CANVAS_SCALE_FACTOR} from '../constants';
const chroma = require('chroma-js');
import {addPoint} from '../actions/index';

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
            x: ((event.clientX - targetRect.left) / (this.props.width * this.props.scale) - 0.5) * 2,
            y: ((event.clientY - targetRect.top) / (this.props.height * this.props.scale) - 0.5) * 2
        };
        this.props.addPoint({
            point: normalized,
            label: 1
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
        // this.ctx.fillStyle = 'white';
        // this.ctx.fillRect(0, 0, this.width, this.height);
        const realWidth = this.props.width * this.props.scale;
        const realHeight = this.props.height * this.props.scale;
        const data = this.ctx.createImageData(realWidth, realHeight);
        for (var i = 0; i < this.props.width; i++) {
            for (var j = 0; j < this.props.height; j++) {
                const px = (j * this.props.width + i);
                const label = this.props.background[px];

                for (var k = 0; k < this.props.scale; k++) {
                    const idx = 4 * this.props.scale * (this.props.width * (j * this.props.scale + k) + i);
                    // const idx = (j * this.props.width * this.props.scale * this.props.scale +  k * this.props.scale * this.props.width + i * this.props.scale ) * 4;
                    for(var l = 0; l < this.props.scale; l++) {
                        const idxx = idx + l * 4;
                        if (label < 0) {
                            data.data[idxx] = 255;
                            data.data[idxx + 1] = 0;
                            data.data[idxx + 2] = 0;
                            data.data[idxx + 3] = 255;
                        } else {
                            data.data[idxx] = 0;
                            data.data[idxx + 1] = 255;
                            data.data[idxx + 2] = 0;
                            data.data[idxx + 3] = 255;
                        }
                    }
                    }


            }
        }
        this.ctx.putImageData(data, 0, 0);
        const radius = this.props.scale * this.props.width / 80;
        this.ctx.imageSmoothingEnabled = false;
        for (var i = 0; i < this.props.points.length; i++) {
            const point = this.props.points[i];
            this.ctx.beginPath();
            this.ctx.arc(point.x * this.props.scale, point.y * this.props.scale, radius, 0, 2 * Math.PI, false);
            if (point.label < 0) {
                this.ctx.fillStyle = chroma('FF0000').brighten().hex();
            } else {
                this.ctx.fillStyle = chroma('00FF00').brighten().hex();
            }
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
    const svm = new SVM({
        cost: state.SVC.config.cost,
        gamma: state.SVC.config.gamma
    });

    svm.train(state.SVC.points, state.SVC.labels);
    const points = state.SVC.points.map((p, idx) => {
        return {
            label: state.SVC.labels[idx],
            SV: true,
            x: (p[0] + 1) * canvasSize / 2,
            y: (p[1] + 1) * canvasSize / 2,
            size: CANVAS_RESOLUTION[state.style.currentBreakpoint],
        }
    });
    const background = [];
    for (var i = 0; i < canvasSize; i++) {
        for (var j = 0; j < canvasSize; j++) {
            background.push(svm.predictOne([i / canvasSize * 2 - 1, j / canvasSize * 2 - 1]));
        }
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