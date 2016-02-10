import React from 'react';
import NavigationStore from '../../stores/NavigationStore';

class RoutesPage extends React.Component {
  state = {
    pages: NavigationStore.getAll()
  }

  render() {
    return (
      <div className={'page__routes'}>
        <h1>Routes</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>URL</th>
          </tr>
          {this.state.pages.map(function(page) {
            return (
              <tr>
                <td>{page.title}</td>
                <td>/{page.route}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default RoutesPage;
