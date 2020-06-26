import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";
import NotFoundPage from "./NotFoundPage";
import TypyOfFood from "./views/TypeOfFood"
import Check from "./views/Check"
import ComHeader from "./components/ComHeader";
import ComFooter from "./components/ComFooter";
import MenuCategory from "./views/Category"
import FoodInfo from './views/FoodInfo';

//http://localhost:3000/menu/specific

export default function Viewport() {
  return (
    <div>
      <Router>
        <ComHeader />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/menu" component={MenuCategory} />
          <Route exact path="/specific" component={TypyOfFood} />
          <Route exact path="/food" component={FoodInfo} />
          <Route exact path="/Check" component={Check} />
          <Route exact path="/profile" component={NotFoundPage} />
        </Switch>
        <ComFooter />
      </Router>
    </div>
  );
}
