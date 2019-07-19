import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

let mountNode = document.getElementById('root');
ReactDOM.render(<Welcome />, mountNode);

module.hot.accept();
