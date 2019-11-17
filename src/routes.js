import React, { Component } from 'react';
import { Router, Route, Redirect, browserHistory } from 'react-router';

import Homepage from './views/Homepage';

export default class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Homepage} />
        <Route path="*" component={Homepage} />
      </Router>
    )
  }
}