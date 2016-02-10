import BaseStore from './BaseStore';

import {
  COLORS_UPDATED
} from '../constants/AppConstants';

class ColorsStore extends BaseStore {

  emitChange() {
    this.emit(COLORS_UPDATED);
  }

  addChangeListener(callback) {
    this.on(COLORS_UPDATED, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(COLORS_UPDATED, callback);
  }
}

let store = new ColorsStore();

store.setAll([{
  name: 'primary',
  title: 'Primary Color',
  value: '#0093FF'
}, {
  name: 'secondary',
  title: 'Secondary Color',
  value: '#FF9740'
}, {
  name: 'tertiary',
  title: 'Tertiary Color',
  value: '#CC4E14'
}, {
  name: 'link',
  title: 'Link Color',
  value: '#141ECC'
}, {
  name: 'dark_link',
  title: 'Dark Link Color',
  value: '#3D4299'
}]);

export default store;
