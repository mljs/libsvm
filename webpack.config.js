'use strict';

const webpack = require('webpack');
const webpackConfig = require('./webpack.common');

webpackConfig.entry = [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:3000',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
].concat(webpackConfig.entry);

webpackConfig.devtool = 'inline-source-map';

webpackConfig.plugins = webpackConfig.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors
]);

webpackConfig.devServer = {
    hot: true,
    inline: true,
    historyApiFallback: true,
    contentBase: 'demos',
    port: 3000
};

webpackConfig.output.publicPath = '/';
// necessary for HMR to know where to load the hot update chunks

module.exports = webpackConfig;