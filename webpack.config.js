'use strict';
// var path = require('path');

module.exports = {
  entry: [
    './src/entry.js'
  ],
  output: {
    // path: './dist/',
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  // externals: {
  //   'react': 'React'
  // },
  devtool: 'source-map',
  module: {
    loaders: [
      // {
      //   test: /\.js$/,
      //   loader: 'jsx!babel',
      //   include: /src/
      // }, 
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        },
        include: /src/
      }, {
        test: /\.css$/,
        loader: 'style!css'
      }, {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8192'
      }
    ]
  }
}