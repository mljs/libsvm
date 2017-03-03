'use strict';
const path = require('path');

module.exports = {
    entry: './demos/app.js',
    output: {
        path: path.join(__dirname, 'demos'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        inline: true,
        contentBase: 'demos'
    },
    node: {
        fs: 'empty'
    }
};