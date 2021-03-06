import './_Colors.scss';

import React from 'react';
import ColorsStore from '../../stores/ColorsStore';

class GlobalColors extends React.Component {
  state = {
    colors: ColorsStore.getAll()
  }

  render() {
    return (
      <div>
        {this.state.colors.map((color, index) => {
          return (
            <div key={'color-' + index}>
              <h5>{color.title}</h5>
              <div className={'color-box'} style={{ backgroundColor: color.value }}></div>
            </div>
          );
        })}
      </div>
    );
  }
}

export {
  GlobalColors
};
