import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Homepage from './views/Homepage';
import PricingPage from './views/Pricing';
import BlogPage from './views/Blog';
import SelectedBlog from "./views/SelectedBlog"
export default class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Homepage} />
        <Route path="/pricing" component={PricingPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/blog/:route" component={SelectedBlog} />
        <Route path="*" component={Homepage} />
      </Router>
    )
  }
}