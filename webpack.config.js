const DEV = 'development';
const NODE_ENV = DEV;
const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src/js'),
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lite.min.js',
    library: 'Lite'
  },

  watch: true,
  
  devtool: NODE_ENV === DEV ? 'cheap-inline-module-source-map' : false,

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
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true
  }
};

if (NODE_ENV !== DEV) {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unsafe      : true,
        warnings    : false,
        drop_console: true
      }
    })
  );
}
