'use strict'
let path = require('path')
let webpack = require('webpack')
let CopyWebpackPlugin = require('copy-webpack-plugin')

const outputDirectory = 'docs'

module.exports = {
  entry: [
    './src/app.js',
    'webpack-hot-middleware/client?reload=true'
  ],
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'app.js'
  },
  module: {
    preLoaders: [{
      // set up standard-loader as a preloader
      test: /\.jsx?$/,
      loader: 'standard',
      exclude: /(node_modules|bower_components)/
    }],
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel'
    }]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
    ),
    new CopyWebpackPlugin([
      // {output}/file.txt
      { from: 'index.html' },
      { from: 'posts', to: 'posts' },
      { from: 'posts', to: 'resources' },
      { from: 'css', to: 'css' },
      // Copy directory contents to {output}/
      { from: 'bower_components', to: 'bower_components' }
    ]),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devServer: {
    port: 8080,
    contentBase: '.',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'bower_components']
  }
}
