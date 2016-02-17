import React from 'react';

import {
  Route,
  IndexRoute
} from 'react-router';

import App from './components/App/App';

// Admin Pages
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import RoutesPage from './components/RoutesPage/RoutesPage';
import StylesPage from './components/StylesPage/StylesPage';

export default (
  <Route path="/" component={App}>
    <Route component={StylesPage} path="styles" />
    <Route component={RoutesPage} path="routes" />
    <Route component={AboutPage} path="about" />
    <IndexRoute component={HomePage} />
  </Route>
);
