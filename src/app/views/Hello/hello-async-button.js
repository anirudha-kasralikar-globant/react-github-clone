// @flow
import { connect } from 'react-redux';

import { helloOperations } from '../../state/ducks/hello';
import Button from '../common/button';

const mapStateToProps = () => ({
  label: 'Say hello asynchronously and send 1234',
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => {
    dispatch(helloOperations.sayHelloAsync(1234));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);
