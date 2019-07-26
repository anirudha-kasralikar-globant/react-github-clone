// @flow
'use strict';
import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

class App extends Component<*> {
  static foo() {
    console.log('1');
    console.log('2');
  }

  onclick = () => {
    console.log('3');
  };

  render() {
    return (
      <Container fluid>
        <header className={'Header'} role="banner">
          <div className={'Header-item'}>Logo</div>
          <button onClick={this.onclick}>CLick me</button>
        </header>
      </Container>
    );
  }
}

export default App;
