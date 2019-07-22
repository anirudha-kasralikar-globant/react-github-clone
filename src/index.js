// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import './../semantic/dist/semantic.css';
import './style/main.less';

declare var module: any;

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

import App from './components/App/index';

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
