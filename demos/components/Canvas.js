import React, {Component} from 'react';
import {connect} from 'react-redux';
import SVM from '../..';
import {CANVAS_RESOLUTION} from '../constants';

class Canvas extends Component {
    componentDidMount() {
        this.ctx = this.canvas.getContext('2d');
        this.draw();
    }

    componentDidUpdate() {
        this.draw();
    }
    render() {
        return (
            <div>
                <canvas
                    width={this.props.width}
                    height={this.props.height}
                    ref={c => this.canvas = c}
                />
            </div>
        );
    }

    draw() {
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(0, 0, this.width, this.height);
        console.log('drawn');
    }
}

function mapStateToProps(state) {
    const svm = new SVM({
        cost: state.SVC.config.cost,
        gamma: state.SVC.config.gamma
    });

    svm.train(state.SVC.points, state.SVC.labels);
    const points = state.SVC.points.map((p, idx) => {
        return {
            label: state.SVC.labels[idx],
            SV: true,
            x: p[0],
            y: p[1],
            size: 1
        }
    });
    const background = [];
    for (var i = 0; i < CANVAS_RESOLUTION; i++) {
        for (var j = 0; j < CANVAS_RESOLUTION; j++) {
            background.push(svm.predictOne([i / CANVAS_RESOLUTION * 2 - 1, j / CANVAS_RESOLUTION * 2 - 1]));
        }
    }

    return {
        width: CANVAS_RESOLUTION,
        height: CANVAS_RESOLUTION,
        background,
        points
    }


}

export default connect(mapStateToProps)(Canvas);