'use strict';

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpackConfig = require('./webpack.common');
const port = 3000;

webpackConfig.devtool = 'inline-source-map';

webpackConfig.plugins = webpackConfig.plugins.concat([
    new BundleAnalyzerPlugin(),
]);

webpackConfig.devServer = {
    inline: true,
    historyApiFallback: true,
    contentBase: 'demos',
    port: port
};

// webpackConfig.output.publicPath = '/';
// necessary for HMR to know where to load the hot update chunks

module.exports = webpackConfig;