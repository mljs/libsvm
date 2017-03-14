import React, {Component} from 'react';
import {connect} from 'react-redux';
import {LABELS_COLORS} from '../constants';
const chroma = require('chroma-js');
import {addPoint} from '../actions/index';
import {getSVCData} from '../selectors/index';

const colorsRgb = LABELS_COLORS.map(c => chroma(c).rgb());
const colorsBrighter = LABELS_COLORS.map(c => chroma(c).brighten().hex());

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
        const realWidth = this.props.width * this.props.scale;
        const realHeight = this.props.height * this.props.scale;
        return (
            <div style={{...this.props.style, width: realWidth, height: realHeight}}>
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

    convertXCoordinates(x) {
        return x * this.props.width * this.props.scale;
    }

    convertYCoordinates(y) {
        return y * this.props.height * this.props.scale;
    }

    drawCross() {
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = "gray";
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.convertYCoordinates(0.5));
        this.ctx.lineTo(this.convertXCoordinates(1), this.convertYCoordinates(0.5));
        this.ctx.moveTo(this.convertXCoordinates(0.5), 0);
        this.ctx.lineTo(this.convertXCoordinates(0.5), this.convertYCoordinates(1));
        this.ctx.stroke();
    }

    drawText(info) {
        if(!info) return;
        this.ctx.font = '14px serif';
        this.ctx.fillText(info, this.convertXCoordinates(0.9), this.convertYCoordinates(0.97))
    }

    fillBackground() {
        this.ctx.fillStyle = 'lightgray';
        this.ctx.fillRect(0, 0, this.props.width * this.props.scale, this.props.height * this.props.scale);
        this.ctx.fillStyle = 'black';
    }

    drawBackground() {
        const {width, height, scale} = this.props;
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
    }

    drawPoints() {
        const {width, height, scale} = this.props;
        const radius = scale * Math.min(height, width) / 80;
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
    }

    draw() {
        const {width, height, info} = this.props;
        if (this.props.background.length !== width * height) {
            this.fillBackground();
        } else {
            this.drawBackground();
            this.drawPoints();
        }

        this.drawCross();
        this.drawText(info);
    }
}

function mapStateToProps(state) {
    return getSVCData(state);
}


export default connect(mapStateToProps, {addPoint})(Canvas);