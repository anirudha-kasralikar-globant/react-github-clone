// @flow

import React from 'react';
import { Link, Route } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';
import Explore from '../../../container/Explore';
import MyIssues from '../../../container/MyIssues';

function NavItems() {
  return (
    <nav className="d-flex" aria-label="Global">
      <Link
        to={ROUTES.ISSUES}
        className="js-selected-navigation-item Header-link  mr-3"
        data-hotkey="g i"
        data-ga-click="Header, click, Nav menu - item:issues context:user"
        aria-label="Issues you created"
        data-selected-links="/issues /issues/assigned /issues/mentioned /issues"
      >
        Issues
      </Link>
      <Route path={ROUTES.ISSUES} component={MyIssues} />
      <Link
        className="js-selected-navigation-item Header-link  mr-3"
        data-ga-click="Header, click, Nav menu - item:explore"
        data-selected-links="/explore /trending /explore"
        to={ROUTES.EXPLORE}
      >
        Explore
      </Link>
      <Route path={ROUTES.EXPLORE} component={Explore} />
    </nav>
  );
}

export default NavItems;
