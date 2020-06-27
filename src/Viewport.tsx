import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";
import NotFoundPage from "./NotFoundPage";
import TypyOfFood from "./views/TypeOfFood"
import ComHeader from "./components/ComHeader";
import ComFooter from "./components/ComFooter";
import Login from './Login'
import Home from './Home'

//http://localhost:3000/menu/specific

export default function Viewport() {
  return (
    <div>
      <Router>
        {/* <ComHeader /> */}
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/NotFound" component={NotFoundPage} />
          <Route exact path="/menu/specific" component={TypyOfFood} />
          <Route path="/login" component={Login} /> 
          <Route path="/home" component={Home} /> 
        </Switch>
        {/* <ComFooter /> */}
      </Router>
    </div>
  );
}
