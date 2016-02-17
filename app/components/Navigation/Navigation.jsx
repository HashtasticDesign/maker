import './_Navigation.scss';

import React from 'react';
import { Link } from 'react-router';

export default class Navigation extends React.Component {

  state = {
    selectedIndex: null
  }

  static propTypes = {
    pages: React.PropTypes.array.isRequired
  };

  renderNavItem(page, index) {
    return (
      <li key={'page-' + index}>
        <Link to={page.route}>
          {page.title}
        </Link>
      </li>
    );
  }

  render() {
    return (
      <ul className={'navigation'}>
        {this.props.pages.map(
          this.renderNavItem.bind(this)
        )}
      </ul>
    );
  }
}
