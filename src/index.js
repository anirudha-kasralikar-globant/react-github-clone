// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.less';
import axe from 'react-axe';
// import { Provider } from 'react-redux'
// import { createStore, combineReducers } from 'redux';

import App from './component/App';

declare var module: any;

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line no-console
  console.log('Looks like we are in development mode!');
}

// const store = createStore(combineReducers({ hello: helloReducer });

const mountNode = document.getElementById('app');

// const wrapApp = (AppComponent, reduxStore) => (
// <Provider store={reduxStore}>
//   <AppComponent />
// </Provider>
// );

if (mountNode !== null) {
  if (process.env.NODE_ENV !== 'production') {
    axe(React, ReactDOM, 1000);
    // ReactDOM.render(wrapApp(<App />, store), mountNode);
    ReactDOM.render(<App />, mountNode);
  } else {
    // ReactDOM.render(wrapApp(<App />, store), mountNode);
    ReactDOM.render(<App />, mountNode);
  }
}

module.hot.accept();
