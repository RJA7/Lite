const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './main.js'
  },

  devtool: 'cheap-inline-module-source-map',

  module: {
    loaders: [
      {
        test  : /\.(vert|frag)$/,
        loader: 'webpack-glsl-loader'
      }
    ]
  },
  
  devServer: {
    host: 'localhost',
    port: 3000,
    contentBase: path.resolve(__dirname, 'dist')
  }
};
