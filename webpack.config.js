/* global __dirname */

const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/.build',
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: './.build',
    historyApiFallback: true
  },
  module: {
    noParse: /es6-promise\.js$/,
    loaders: [
      {test: /\.css$/, loader: 'style!css?modules'},
      {test: /\.jsx$/, exclude: /node_modules/, loader: 'babel'},
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'}
    ]
  },
  resolve: {
    root: path.resolve('./src')
  },
  babel: {
    presets: ['es2015', 'react'],
    plugins: ['transform-runtime']
  },
  postcss: function() {
    return [autoprefixer];
  }
};
