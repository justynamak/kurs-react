import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import AdminPanel from "./AdminPanel/AdminPanel";
import PageNotFound from "./PageNotFound";
import { render } from "@testing-library/react";

export default class RouterClass extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/admin-panel" component={AdminPanel} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}
{
  /* <AdminPanel addBook={this.addBook} /> */
}
