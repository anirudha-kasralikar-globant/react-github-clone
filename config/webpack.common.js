// @flow
const merge = require('webpack-merge');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const moduleRule = require('./webpack.module.rules');
const plugins = require('./webpack.plugins');
const paths = require('./paths');

module.exports = merge(moduleRule, plugins, {
  entry: [paths.appIndexJs],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      Views: path.resolve(paths.appSrc, 'views'),
      State: path.resolve(paths.appSrc, 'state'),
      Utils: path.resolve(paths.appSrc, 'utils'),
      Services: path.resolve(paths.appSrc, 'services'),
      Assets: path.resolve(paths.appSrc, 'assets'),
    },
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\\/]node_modules[\\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
  },
});
