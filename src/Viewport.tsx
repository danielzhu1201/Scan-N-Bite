import React from "react";
import App from "./App";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Viewport() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  );
}
