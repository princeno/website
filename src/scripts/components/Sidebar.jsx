const debug = require('debug')('app:component:sidebar');
const React = require('react');
const Router = require('react-router');
const Link = Router.Link;

module.exports = React.createClass({
  mixins: [Router.State],

  render: function () {
    return (
      <div id="sidebar">
        <img src="images/logo.png" className="sidebar__logo" />
        <div className="sitebar__title">
          <h1>Princeno</h1>
          <h1>Xiao.</h1>
        </div>
        <div className="c-line" />
        <div className="sidebar__desc">
          <div><small>Design works</small></div>
          <div><small>2012 - 2015</small></div>
        </div>
        {this.renderMenu()}
      </div>
    );
  },

  renderMenu: function () {
    return (
      <ul className="sidebar__nav">
        <li><Link to="works">Works</Link></li>
        <li><Link to="blog">Blog</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="contact">Contact</Link></li>
      </ul>
    );
  }
});
