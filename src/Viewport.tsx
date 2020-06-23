import React from "react";
import App from "./App";
import NotFoundPage from "./NotFoundPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Viewport() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}
