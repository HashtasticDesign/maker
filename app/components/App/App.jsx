import './_App.scss';

import React from 'react';
import NavigationStore from '../../stores/NavigationStore';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

function getState() {
  return {
    pages: NavigationStore.getAll()
  };
}

class App extends React.Component {

  state = getState()

  render() {
    return (
      <div className={'app'}>
        <Navigation pages={this.state.pages} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default App;
