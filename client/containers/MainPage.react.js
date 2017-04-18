import React from 'react';
import {Link} from 'react-router-dom';

class MainPage extends React.PureComponent {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand" href="#">TEST YOURSELF</Link>
          </div>
        </div>
      </nav>
    );
  };
};

export default MainPage;
