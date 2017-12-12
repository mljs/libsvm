'use strict';

const COST_GRID_SIZE = 6;
const GAMMA_GRID_SIZE = 6;
const COST_MIN = -3;
const COST_MAX = 3;
const GAMMA_MIN = -3;
const GAMMA_MAX = 3;


const gamma = Array.from({length: GAMMA_GRID_SIZE}).map(normalize(GAMMA_GRID_SIZE, GAMMA_MIN, GAMMA_MAX)).map(pow10);
const cost = Array.from({length: COST_GRID_SIZE}).map(normalize(COST_GRID_SIZE, COST_MIN, COST_MAX)).map(pow10);

function normalize(n, min, max) {
    return (val, idx) => min + (idx / (n - 1)) * (max - min);
}

function pow10(val) {
    return 10 ** val;
}

module.exports = {
    gamma, cost
};
