import React, { Component } from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Homepage from "./views/Homepage";
import PricingPage from "./views/Pricing";
import BlogPage from "./views/Blog";
import SelectedBlog from "./views/SelectedBlog";
import RouteComponent from "./RouteComponent";
import Header from "./components/Header/header";

export default class Routes extends Component {
  render() {
    return (
      <>
        <Router>
          <RouteComponent>
            <Switch>
              {/* <div> */}
              {/* <Route component={Header} /> */}
              <Route exact path="/" component={Homepage} />
              <Route exact path="/pricing" component={PricingPage} />
              <Route exact path="/blog" component={BlogPage} />
              <Route exact path="/blog/:route" component={SelectedBlog} />
              <Route path="*" component={Homepage} />
            </Switch>
            {/* </div> */}
          </RouteComponent>
        </Router>
      </>
    );
  }
}
