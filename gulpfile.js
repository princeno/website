'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var $log = $.util.log;
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');
// var webpackDistConfig = require('./webpack.dist.config.js');

gulp.task('serve', function (done) {
  var compiler = webpack(webpackConfig),
      host = '0.0.0.0', port = 8080;

  new WebpackDevServer(compiler, {
    contentBase: 'src/',
    hot: true, port: port,
    publicPath: '/assets/',
    noInfo: true
  })
  .listen(port, host, function (err){
    if (err) $log('[webpack-dev-server] error', err);

    $log('[webpack-dev-server] started');
    require('opn')('http://localhost:8080/');
  });
});

gulp.task('default', []);
