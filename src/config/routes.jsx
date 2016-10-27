import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Layout from '../components/layout.jsx';
import About from '../components/about.jsx';
import Portfolio from '../components/portfolio.jsx';
import Contact from '../components/contact.jsx'

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Route>
    </Router>
  );
};

export default Routes;
