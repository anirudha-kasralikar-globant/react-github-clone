// @flow

import React from 'react';
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Header';
import * as ROUTES from '../../constants/routes';
import MyIssues from '../../container/MyIssues';
import Explore from '../../container/Explore';

function App() {
  return (
    <Container fluid>
      <Router>
        <div className="position-relative js-header-wrapper">
          <Header />
        </div>
        <div id="start-of-content" className="show-on-focus" />
        <div id="js-flash-container" />
        <Route path={ROUTES.ISSUES} component={MyIssues} />
        <Route path={ROUTES.EXPLORE} component={Explore} />
      </Router>
    </Container>
  );
}

export default App;
