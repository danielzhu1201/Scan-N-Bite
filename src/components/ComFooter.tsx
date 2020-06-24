import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import NotFoundPage from "../NotFoundPage";

export default class ComFooter extends Component {
  render() {
    return (
      <div className="bottom-navbar">
        <NavLink className="bottom-menu" to="/NotFound">
          Menu
        </ NavLink>
        <NavLink className="bottom-check" to="/NotFound">
          Check
        </ NavLink>
        <NavLink className="bottom-profile" to="/NotFound">
          Profile
        </ NavLink>
        <Switch>
          <Route path="/NotFound" component={NotFoundPage} />
          <Route path="/NotFound" component={NotFoundPage} />
          <Route path="/NotFound" component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

