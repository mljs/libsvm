'use strict';
const path = require('path');
const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
    entry: './demos/app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                test: /\.wasm(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                query: {
                    name: '[name].wasm',
                    limit: 1
                }
            }
        ]
    },
    plugins: [
        new Visualizer()
    ],
    devServer: {
        inline: true,
        historyApiFallback: true,
        contentBase: 'demos'
    },
    node: {
        fs: 'empty'
    }
};