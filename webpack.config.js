'use strict';
var webpack = require('webpack');
var path = require('path');

module.exports = {

  output: {
    path: '/assets/',
    filename: "[name].js"
  },

  cache: true,
  debug: true,
  devtool: 'source-map',
  entry: {
    main: ['webpack/hot/only-dev-server', './src/scripts/main.js'],
    vendor: ['react','react-router','debug']
  },

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: { }
  },

  module: {
    preLoaders: [{
      test: '\\.js$',
      exclude: 'node_modules',
      loader: 'jshint'
    }],
    loaders: [{
      test: /\.jsx$/,
      loaders: ['react-hot','jsx?harmony']
    }, 
    // {
    //   test: /\.js$/,
    //   exclude: /node_modules/, 
    //   loader: 'babel?stage=0&optional=runtime'
    // }, 
    {
      test: /\.scss/,
      loaders: ['style','css','autoprefixer?browsers=last 2 version!',
        'sass?&sourceMap=true&outputStyle=expanded&includePaths[]=' + 
          path.resolve(__dirname, './node_modules')
      ]
    }, {
      test: /\.css$/,
      loaders: ['style', 'css', 'autoprefixer?browsers=last 2 version']
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }, { 
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
      loader: "url?limit=10000&minetype=application/font-woff" 
    }, { 
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
      loader: "file" 
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i, 
      // loader: 'image?bypassOnDebug&optimizationLevel=7&interlaced=false'
      loader: 'file'
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
    new webpack.IgnorePlugin(/vertx/)
  ]

};
