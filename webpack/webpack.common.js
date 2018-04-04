'use strict';

const path = require('path');

const webpack = require('webpack');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const publicPath = '/libsvm/';

module.exports = {
  entry: [
    './demos/app.js'
    // the entry point of our app
  ],
  output: {
    path: path.join(__dirname, '../demo-dist'),
    filename: 'bundle.js',
    publicPath
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
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
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: [
          /\.wasm(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          /libsvm\.asm\.js$/,
          /libsvm\.js\.mem$/
        ],
        loader: 'url-loader',
        query: {
          name: '[name].[ext]',
          limit: 1
        }
      },
      {
        test: /manifest\.json$/,
        loader: 'file-loader',
        query: {
          name: 'manifest.json'
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
    new LodashModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        worker: {
          output: {
            filename: 'hash.worker.js',
            chunkFilename: '[id].hash.worker.js'
          }
        }
      }
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.join(__dirname, './sw.js'),
      publicPath
    })
  ],
  node: {
    fs: 'empty',
    crypto: 'empty'
  }
};
