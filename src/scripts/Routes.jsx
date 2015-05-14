const React = require('react');
const Router = require('react-router');
const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;
const Redirect = Router.Redirect;

module.exports = [
  <Route name="app" path="/" handler={require('./components/App')}>
    <Route name="works" path="works" handler={require('./components/Works')} />
    <Route name="blog" path="blog" handler={require('./components/Blog')} />
    <Route name="about" path="about" handler={require('./components/About')} />
    <Route name="contact" path="contact" handler={require('./components/Contact')} />
  </Route>
];
