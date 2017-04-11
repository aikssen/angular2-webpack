const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: helpers.root('dist'),
    publicPath: 'https://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    // extracts embebed css from js files into external files
    new ExtractTextPlugin('[name].css')
  ],
  devServer: { // http dev server, keeps all bundles in memory
    historyApiFallback: true,
    stats: 'minimal',
    https: true
  }
});
