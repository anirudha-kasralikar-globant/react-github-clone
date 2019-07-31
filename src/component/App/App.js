// @flow

import React from 'react';
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

function App() {
  return (
    <Container fluid>
      <Router>
        <div className="position-relative js-header-wrapper">
          <Header />
        </div>
        <div id="start-of-content" className="show-on-focus" />
        <div id="js-flash-container" />
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
