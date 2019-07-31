// @flow

import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Calculator from './Calculator';

class App extends Component<*> {
  static foo() {
    // Implement
  }

  onclick = () => {
    // Implement
  };

  render() {
    return (
      <Container fluid>
        <Router>
          <header className="Header" role="banner">
            <div className="Header-item">Logo</div>
            <button type="button" onClick={this.onclick}>
              <Link to="/calculator">Calculator</Link>
            </button>
          </header>
          <Route path="/calculator" component={Calculator} />
        </Router>
      </Container>
    );
  }
}

export default App;
