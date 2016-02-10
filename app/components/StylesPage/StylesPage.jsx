import React from 'react';

import { GlobalColors } from '../Colors/GlobalColors';

class StylesPage extends React.Component {
  render() {
    return (
      <div className={'page__styles'}>
        <h1>Styles</h1>
        <ul>
          <li>
            Colors:
            <GlobalColors />
          </li>
        </ul>
      </div>
    );
  }
}

export default StylesPage;
