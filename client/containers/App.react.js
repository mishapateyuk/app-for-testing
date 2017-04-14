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
          <Route path="/" component={MainPage} />
          <Route path="/about" component={AboutPage} />
        </div>
      </ConnectedRouter>
    );
  };
};

export default App;
