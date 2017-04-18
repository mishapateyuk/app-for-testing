import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import {history} from '../store';

class Header extends React.PureComponent {
  render() {
    return (
      <nav className="navbar navbar-fixed-top navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <span className="brand">Project name</span>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ConnectedRouter history={history}>
              <ul className="nav navbar-nav">
                <li><NavLink activeClassName="active-nav-link" exact to="/">Home</NavLink></li>
                <li><NavLink activeClassName="active-nav-link" to="/about">About</NavLink></li>
                <li><NavLink activeClassName="active-nav-link" to="/contact">Contact</NavLink></li>
              </ul>
            </ConnectedRouter>
          </div>
        </div>
      </nav>
    );
  };
};

export default Header;
