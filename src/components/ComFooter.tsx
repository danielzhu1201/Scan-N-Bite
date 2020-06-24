import React, { Component, useState } from "react";
import { NavLink, Switch, Route } from "react-router-dom";

import NotFoundPage from "../NotFoundPage";

import modules from "./styles/ComFooter.module.css";

export default class ComFooter extends Component {
  render() {
    return (
      <div className={modules.Container}>
        <NavLink className={modules.FooterFont} to="/NotFound">
          Menu
        </NavLink>
        <NavLink className={modules.FooterFont} to="/NotFound">
          Check
        </NavLink>
        <NavLink className={modules.FooterFont} to="/NotFound">
          Profile
        </NavLink>
      </div>
    );
  }
}
