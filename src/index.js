// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.less';
import axe from 'react-axe';
import App from './components/App';

declare var module: any;

if (process.env.NODE_ENV !== 'production') {
  // console.log('Looks like we are in development mode!');
}

const mountNode = document.getElementById('app');

if (mountNode !== null) {
  if (process.env.NODE_ENV !== 'production') {
    axe(React, ReactDOM, 1000);
    ReactDOM.render(<App />, mountNode);
  } else {
    ReactDOM.render(<App />, mountNode);
  }
}

module.hot.accept();
