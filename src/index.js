// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import './../semantic/dist/semantic.css';

declare var module: any;

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

import Welcome from './Welcome';

let mountNode = document.getElementById('root');

if (mountNode !== null) {
  ReactDOM.render(<Welcome />, mountNode);
}

module.hot.accept();
