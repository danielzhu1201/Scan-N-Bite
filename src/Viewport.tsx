import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";
import NotFoundPage from "./NotFoundPage";
import TypyOfFood from "./views/TypeOfFood";
import Check from "./views/Check";
import ComHeader from "./components/ComHeader";
import ComFooter from "./components/ComFooter";
import Login from "./views/Login";
import Home from "./Home";
import MenuCategory from "./views/Category";
import FoodInfo from "./views/FoodInfo";
import Profile from "./views/Profile"

export default function Viewport() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Router>
        <ComHeader />
        <Switch>
          <Route exact path="/" component={MenuCategory} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/specific" component={TypyOfFood} />
          <Route exact path="/food" component={FoodInfo} />
          <Route exact path="/check" component={Check} />
          <Route exact path="/profile" component={Profile} />
          <Route component={NotFoundPage} />
        </Switch>
        <ComFooter />
      </Router>
    </div>
  );
}