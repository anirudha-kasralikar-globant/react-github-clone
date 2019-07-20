// @flow

import React from 'react';
import './style/main.less';
import { Button } from 'semantic-ui-react';

class Welcome extends React.Component<*> {
  render() {
    return (
      <React.Fragment>
        <Button>Welcome</Button>
        <h1 className={'header'}>Minimal React Webpack Babel Setup.....</h1>
      </React.Fragment>
    );
  }
}

export default Welcome;
