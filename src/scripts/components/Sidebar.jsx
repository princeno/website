const debug = require('debug')('app:component:sidebar');
const React = require('react');
const Router = require('react-router');
const Link = Router.Link;
const classNames = require('classnames');

var navItems = [
  { to: 'works', name: 'Works' },
  { to: 'blog', name: 'Blog' },
  { to: 'about', name: 'About' },
  { to: 'contact', name: 'Contact' }
]; 

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
        {this.renderNav()}
      </div>
    );
  },

  renderNav: function () {
    return (
      <ul className="sidebar__nav">
        {navItems.map(this.renderNavItem)}
      </ul>
    );
  },
  
  renderNavItem: function (item) {
    var linkClass = classNames('c-sitenav__link', {
      'is-active': this.isActive(item.to)
    });
    return (
      <li className="c-sitenav__item" key={item.to}>
        <Link className={linkClass} to={item.to}>{item.name}</Link>
      </li>
    );
  }
});
