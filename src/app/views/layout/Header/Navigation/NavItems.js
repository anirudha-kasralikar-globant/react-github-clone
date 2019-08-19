// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../../routes';

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
      <Link
        className="js-selected-navigation-item Header-link  mr-3"
        data-ga-click="Header, click, Nav menu - item:explore"
        data-selected-links="/explore /trending /explore"
        to={ROUTES.EXPLORE}
      >
        Explore
      </Link>
      <Link
        className="js-selected-navigation-item Header-link  mr-3"
        data-ga-click="Header, click, Nav menu - item:explore"
        data-selected-links="/hello /hello /hello"
        to={ROUTES.HELLO}
      >
        Hello (Thunk)
      </Link>
      <Link
        className="js-selected-navigation-item Header-link  mr-3"
        data-ga-click="Header, click, Nav menu - item:explore"
        data-selected-links="/posts /posts /posts"
        to={ROUTES.POSTS}
      >
        Posts (Thunk)
      </Link>
      <Link
        className="js-selected-navigation-item Header-link  mr-3"
        data-ga-click="Header, click, Nav menu - item:explore"
        data-selected-links="/topics /topics /topics"
        to={ROUTES.TOPICS}
      >
        Topics (Saga)
      </Link>
    </nav>
  );
}

export default NavItems;
