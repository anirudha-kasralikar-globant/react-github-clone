// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.less';
import App from './components/App';

declare var module: any;

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

let mountNode = document.getElementById('app');

if (null !== mountNode) {
  if (process.env.NODE_ENV !== 'production') {
    let axe = require('react-axe');
    axe(React, ReactDOM, 1000);
    ReactDOM.render(<App />, mountNode);
  } else {
    ReactDOM.render(<App />, mountNode);
  }
}

module.hot.accept();
