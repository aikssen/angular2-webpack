const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[id].[hash].chunk.js'
  },
  plugins: [
    // stops the build if there is an error.
    new webpack.NoEmitOnErrorsPlugin(),
    // uglify and minification (.min)
    new webpack.optimize.UglifyJsPlugin({
      mangle: { keep_fnames: true } // https://github.com/angular/angular/issues/10618
    }),
    // extracts embedded css as external file
    new ExtractTextPlugin('css/[name].[hash].css'),
    // define environment variables that can be referenced within the application
    new webpack.DefinePlugin({
      'process.env': { 'ENV': JSON.stringify(ENV) }
    }),
    // override options of certain loaders
    new webpack.LoaderOptionsPlugin({
      htmlLoader: { minimize: false } // workaround for ng2
    })
  ]
});
