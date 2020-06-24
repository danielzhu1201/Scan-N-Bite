import React from "react";
import App from "./App";
import NotFoundPage from "./NotFoundPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MenuCategoryView from './containers/menu/category';

export default function Viewport() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/menu/category" component={MenuCategoryView} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}
