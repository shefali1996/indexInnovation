// import React, { Component } from "react";
import React, { Component } from 'react';
import Header from "./components/Header/header";
import { Router, Route,  } from 'react-router-dom';

import Homepage from './views/Homepage';
import PricingPage from './views/Pricing';
import BlogPage from './views/Blog';
import SelectedBlog from "./views/SelectedBlog"
// import RouteComponent from "./RouteComponent"
// import Header from "./components/Header/header"

export default class RouteComponent extends Component {
  render() {
    return (
      <div>
        <Header/>
       {this.props.children}
      </div>
    );
  }
}
