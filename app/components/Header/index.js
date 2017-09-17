import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import TopNav from './TopNav';
import TopNavLink from './TopNavLink';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <TopNav>
          <TopNavLink to="/home">
            <FormattedMessage {...messages.home} />
          </TopNavLink>
          <TopNavLink to="/features">
            <FormattedMessage {...messages.features} />
          </TopNavLink>
          <TopNavLink to="/map">
            Map
          </TopNavLink>
          <TopNavLink to="/user" style={{ float: 'right' }}>
            <i className="fa fa-user" aria-hidden="true"></i> Admin
          </TopNavLink>
        </TopNav>
      </div>
    );
  }
}

export default Header;
