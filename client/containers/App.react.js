import React from 'react';
import {ConnectedRouter} from 'react-router-redux';
import {history} from '../store';
import Container from './Container.react';
import Footer from '../compontents/Footer.react';

class App extends React.PureComponent {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Container />
          <Footer />
        </div>
      </ConnectedRouter>
    );
  };
};

export default App;
