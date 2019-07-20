// @flow

import React from 'react';
import './style/main.less';
import { Button, Loader } from 'semantic-ui-react';
import { Container, Header } from 'semantic-ui-react';

class Welcome extends React.Component<*> {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Header>Fomantic-UI & Semantic-UI-React</Header>
        </Container>
        <Loader active inline className="slow red" />
        <Loader active inline className="fast green" />
        <Button>Welcome</Button>
        <h1 className={'header'}>Minimal React Webpack Babel Setup.....</h1>
      </React.Fragment>
    );
  }
}

export default Welcome;
