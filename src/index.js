import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.less';

class Welcome extends React.Component {
  render() {
    return <h1 className={'header'}>Hello World from React boilerplate</h1>;
  }
  // This is comment
}

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

let mountNode = document.getElementById('root');
ReactDOM.render(<Welcome />, mountNode);
