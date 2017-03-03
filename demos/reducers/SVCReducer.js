const defaultState = {
    config: {
        gamma: 1,
        cost: 1
    },
    points: [[0.5, 0.7],[0.2,0.4],[0.7, 0.3],[-0.5, -0.5],[-0.7, 0.1],[0, -0.4]],
    labels: [1,1,1,-1,-1,-1]
};

export default function SVCReducer(state = defaultState, action) {
    console.log('hello2!');
    switch(action.type) {
        default:
            return state;
    }
}