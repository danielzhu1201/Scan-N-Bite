import React from "react";
import App from "./App";
import NotFoundPage from "./NotFoundPage";
import TypyOfFood from "./views/TypeOfFood"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function Viewport() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/NotFound" component={NotFoundPage} />
        <Route exact path="/menu/specific" component={TypyOfFood} />
      </Switch>
    </Router>
  );
}
