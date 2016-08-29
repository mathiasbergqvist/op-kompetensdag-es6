var webpack = require('webpack');
var path = require('path');
var devServerPort = 9090;

module.exports = {
  entry: {
    app: path.resolve('./main.js')
  },
  output: {
    path: path.resolve('./build'),
    filename: "bundle.js"
  },
  module : {
    loaders : [
      {
        test : /\.js?$/,
        // include : path.resolve('src/app'),
        exclude: /node_modules/,
        loader : 'babel'
      }
    ]
  },
  devServer: {
    port : devServerPort,
    inline: false
  }
};