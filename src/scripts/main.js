const debug = require('debug');
const bootstrapDebug = debug('app:client');
const React = require('react');
const Router = require('react-router');

const app = require('./app');
const routes = require('./Routes');

debug.enable('app:*');

require('normalize.css/normalize.css');
require('styles/app.scss');

Router.run(routes, Router.HashLocation, function (Handler) {
  React.render(React.createElement(Handler, { flux: app }), 
               document.getElementById('app'));
});
