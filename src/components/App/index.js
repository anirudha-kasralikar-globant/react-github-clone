// @flow

import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import * as ROUTES from '../../constants/routes';
import SignUpPage from '../SignUp';
import PasswordForget from '../PasswordForget';

class App extends Component<*> {
  render() {
    return (
      <Container fluid>
        <Router>
          <Header>
            <Navigation />
            <hr />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
          </Header>
        </Router>
      </Container>
    );
  }
}

export default App;
