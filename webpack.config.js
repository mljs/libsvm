'use strict';
const path = require('path');
const Visualizer = require('webpack-visualizer-plugin');
const webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        // activate HMR for React

        'webpack-dev-server/client?http://localhost:3000',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates

        './demos/app.js',
        // the entry point of our app
    ],
    output: {
        path: path.resolve(__dirname, 'demo-dist'),
        filename: 'bundle.js',
        publicPath: '/'
        // necessary for HMR to know where to load the hot update chunks
    },

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                exclude: [/node_modules/, /libsvm\.asm\.js$/],
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
                test: [/\.wasm(\?v=[0-9]\.[0-9]\.[0-9])?$/, /libsvm\.asm\.js$/, /libsvm\.js\.mem$/],
                loader: 'url-loader',
                query: {
                    name: '[name].[ext]',
                    limit: 1
                }
            },
            {
                test: require.resolve('jquery'),
                loader: 'imports-loader'
            },
            {
                test: require.resolve('bootstrap'),
                loader: 'imports-loader',
                query: {
                    jQuery: 'jquery',
                    Tether: 'tether'
                }
            },
            {
                test: require.resolve('tether'),
                loader: 'imports-loader'
            }
        ]
    },
    plugins: [
        new Visualizer(),
        // Generate a page to visualize your bundle

        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates

        new webpack.NoEmitOnErrorsPlugin(),
        // do not emit compiled assets that include errors
    ],
    devServer: {
        hot: true,
        inline: true,
        historyApiFallback: true,
        contentBase: 'demos',
        port: 3000
    },
    node: {
        fs: 'empty'
    }
};