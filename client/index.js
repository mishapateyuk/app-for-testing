import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './containers/App.react';
import store from './store';
import './style/entry.scss';

const application = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  application,
  document.getElementById('root')
);
