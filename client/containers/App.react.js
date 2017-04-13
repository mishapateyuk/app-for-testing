import React from 'react';
import {Route, Link} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import {history} from '../store';
import MainPage from './MainPage.react';
import AboutPage from './AboutPage.react';

class App extends React.PureComponent {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Link to="/about">about</Link>
          <Link to="/">main</Link>
          <Route path="/" component={MainPage} />
          <Route path="/about" component={AboutPage} />
        </div>
      </ConnectedRouter>
    );
  };
};

export default App;
