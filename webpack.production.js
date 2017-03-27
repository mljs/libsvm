const webpackConfig = require('./webpack.common');
const Visualizer = require('webpack-visualizer-plugin');

webpackConfig.plugins = webpackConfig.plugins.concat([
    new Visualizer(),
    // Generate a page to visualize your bundle
]);

module.exports = webpackConfig;
