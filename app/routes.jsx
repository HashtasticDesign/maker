import React from 'react';

import {
  Route,
  DefaultRoute
} from 'react-router';

import App from './components/App/App';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import RoutesPage from './components/RoutesPage/RoutesPage';
import StylesPage from './components/StylesPage/StylesPage';

export default (
  <Route handler={App}>
    <Route handler={StylesPage} name="styles" path="/styles" />
    <Route handler={RoutesPage} name="routes" path="/routes" />
    <Route handler={AboutPage} name="about" path="/about" />
    <DefaultRoute handler={HomePage} name="home" />
  </Route>
);
