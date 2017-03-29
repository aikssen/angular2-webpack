const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[id].[hash].chunk.js'
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({ 
      mangle: { keep_fnames: true } // https://github.com/angular/angular/issues/10618
    }),
    new ExtractTextPlugin('css/[name].[hash].css'),
    new webpack.DefinePlugin({
      'process.env': { 'ENV': JSON.stringify(ENV) }
    }),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: { minimize: false } // workaround for ng2
    })
  ]
});

