const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  // basedir
  context: path.resolve(__dirname, 'src'),

  // extensions: this types of files can be accessed without extensions
  resolve: {
    extensions: ['.ts', '.js']
  },

  // devserver
  devServer: {
    contentBase: './dist'
  },

  // input
  entry: './app',

  // output
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  // loaders
  module: {
    rules: [
      // TypeScript => JavaScript
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  // plugins
  plugins: [
    // minification plugin
    new UglifyJsPlugin(),

    // delete dist folder
    new CleanWebpackPlugin(['dist']),

    // create dist/index.html
    new HtmlWebpackPlugin({
      title: 'TypeScript In-Depth',
      template: 'index.html'
    })
  ],

  // switch on source-map as a separate file: bundle.js.map
  devtool: 'source-map'
};
