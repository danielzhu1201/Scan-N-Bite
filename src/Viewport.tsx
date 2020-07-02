import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TypyOfFood from "./views/TypeOfFood";
import Check from "./views/Check";
import ComHeader from "./components/ComHeader";
import ComFooter from "./components/ComFooter";
import Login from "./views/Login";
import Pay from "./views/Pay";
import FoodInfo from "./views/FoodInfo";
import Profile from "./views/Profile";
import Success from "./views/Success";
import Failure from "./views/Failure";
import PastOrders from "./views/PastOrders";
import CategoryPage from "./views/CategoryPage";

export default function Viewport() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Router>
        <ComHeader />
        <Switch>
          <Route exact path="/" component={CategoryPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/category/:type" component={TypyOfFood} />
          <Route exact path="/food/:type/:id" component={FoodInfo} />
          <Route exact path="/check" component={Check} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/pay" component={Pay} />
          <Route exact path="/success" component={Success} />
          <Route exact path="/failure" component={Failure} />
          <Route exact path="/orders" component={PastOrders} />
          <Route component={Failure} />
        </Switch>
        <ComFooter />
      </Router>
    </div>
  );
}
