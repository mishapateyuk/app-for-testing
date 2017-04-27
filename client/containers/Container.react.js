import React from 'react';
import Header from './Header.react';
import {Route} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import {history} from '../store';
import TestsList from './TestsList.react';
import Contact from '../components/Contact.react';
import About from '../components/About.react';
import TestPreview from './TestPreview.react';
import TestInProgress from './TestInProgress.react';

class Container extends React.PureComponent {
  render() {
    return (
    <div className="container">
      <Header />
      <ConnectedRouter history={history}>
        <div className="container">
          <Route exact path="/" component={TestsList} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/test-preview/:id" component={TestPreview} />
          <Route path="/test/:id" component={TestInProgress} />
        </div>
      </ConnectedRouter>
    </div>
    );
  };
};

export default Container;
