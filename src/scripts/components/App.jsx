const debug = require('debug')('app:component:app');
const React = require('react');
const Router = require('react-router');
const RouteHandler = require('react-router').RouteHandler;

module.exports = React.createClass({

  render: function () {
    return (
      <div>
        <div>app</div>
        <RouteHandler {...this.props} />
      </div>
    );
  }
});
