import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import {history} from '../store';
import Glyphicon from '../compontents/Glyphicon.react';

class Header extends React.PureComponent {
  render() {
    return (
      <nav className="navbar navbar-fixed-top navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <span className="brand">Project name</span>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <form className="navbar-form navbar-right">
              <div className="input-group">
                <span className="input-group-addon" id="sizing-addon1">
                  {<Glyphicon type="search" />}
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search test"
                />
              </div>
            </form>
            <ConnectedRouter history={history}>
              <ul className="nav navbar-nav">
                <li>
                  <NavLink activeClassName="active-nav-link" exact to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active-nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active-nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </ConnectedRouter>
          </div>
        </div>
      </nav>
    );
  };
};

export default Header;
