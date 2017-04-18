import React from 'react';
import Header from './Header.react';
import {Route} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import {history} from '../store';
import TestsList from './TestsList.react';
import Contact from '../compontents/Contact.react';
import About from '../compontents/About.react';

class Container extends React.PureComponent {
  render() {
    return (
    <div className="container">
      <Header />
      <ConnectedRouter history={history}>
        <div className="container marketing">
          <Route exact path="/" component={TestsList} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </div>
      </ConnectedRouter>
    </div>
    );
  };
};

export default Container;
