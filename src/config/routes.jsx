import { React, Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Layout from '../components/layout.jsx';

const Routes = () => {
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
    </Route>
  </Router>
};

export default Routes;
