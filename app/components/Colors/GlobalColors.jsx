import './_Colors.scss';

import React from 'react';
import ColorsStore from '../../stores/ColorsStore';

class GlobalColors extends React.Component {
  state = {
    colors: ColorsStore.getAll()
  }

  render() {
    return (
      <div className={'style__colors'}>
        {this.state.colors.map(color => {
          return (
            <div>
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
