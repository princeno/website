const React = require('react');
const Router = require('react-router');
const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;
const Redirect = Router.Redirect;

module.exports = [
  <Route name="app" path="/" handler={require('./components/App')}>
  </Route>
];
