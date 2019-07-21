// @flow
'use strict';
import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import LandingPage from '../Landing';
import SignInPage from '../SignIn';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

type Props = {
  activeItem: string,
};

type State = {
  activeItem: string,
};

class Navigation extends Component<Props, State> {
  state = {
    activeItem: this.props.activeItem,
  };

  static defaultProps = {
    activeItem: 'LANDING',
  };

  constructor(props: Props) {
    super(props);

    this.state.activeItem = props.activeItem;
  }

  handleItemClick = (event: SyntheticEvent<*>, { name }: { name: string }) => {
    return this.setState({ activeItem: name });
  };

  render() {
    let activeItem: string = this.state.activeItem;

    return (
      <div>
        <Menu>
          <Menu.Item
            name="SIGN_IN"
            active={activeItem === 'SIGN_IN'}
            onClick={this.handleItemClick}
            as={Link}
            to={ROUTES.SIGN_IN}
          >
            Sign In
          </Menu.Item>
          <Menu.Item
            name="LANDING"
            active={activeItem === 'LANDING'}
            onClick={this.handleItemClick}
            as={Link}
            to={ROUTES.LANDING}
          >
            Landing
          </Menu.Item>
          <Menu.Item
            name="HOME"
            active={activeItem === 'HOME'}
            onClick={this.handleItemClick}
            as={Link}
            to={ROUTES.HOME}
          >
            Home
          </Menu.Item>
          <Menu.Item
            name="ACCOUNT"
            active={activeItem === 'ACCOUNT'}
            onClick={this.handleItemClick}
            as={Link}
            to={ROUTES.ACCOUNT}
          >
            Account
          </Menu.Item>
          <Menu.Item
            name="ADMIN"
            active={activeItem === 'ADMIN'}
            onClick={this.handleItemClick}
            as={Link}
            to={ROUTES.ADMIN}
          >
            Admin
          </Menu.Item>
        </Menu>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
      </div>
    );
  }
}

export default Navigation;
