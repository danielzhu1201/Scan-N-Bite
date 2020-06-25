import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";
import NotFoundPage from "./NotFoundPage";
import TypyOfFood from "./views/TypeOfFood"
import ComHeader from "./components/ComHeader";
import ComFooter from "./components/ComFooter";

//http://localhost:3000/menu/specific

export default function Viewport() {
  return (
    <div>
      <Router>
        <ComHeader />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/NotFound" component={NotFoundPage} />
          <Route exact path="/menu/specific" component={TypyOfFood} />
        </Switch>
        <ComFooter />
      </Router>
    </div>
  );
}
