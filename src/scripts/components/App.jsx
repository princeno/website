const debug = require('debug')('app:component:app');
const React = require('react');
const Router = require('react-router');
const RouteHandler = Router.RouteHandler;

var Sidebar = require('./Sidebar');

module.exports = React.createClass({

  render: function () {
    return (
      <div>
        <Sidebar />
        <RouteHandler {...this.props} />
      </div>
    );
  }
});
