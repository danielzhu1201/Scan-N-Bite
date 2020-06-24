import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";
import RestaurantIcon from '@material-ui/icons/Restaurant';
import ReceiptIcon from '@material-ui/icons/Receipt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

import modules from "./styles/ComFooter.module.css";

export default class ComFooter extends Component {
  render() {
    return (
      <div className={modules.Container}>
        <NavLink className={modules.FooterFont} to="/NotFound">
          <RestaurantIcon />
          Menu
        </NavLink>
        <NavLink className={modules.FooterFont} to="/NotFound">
          <ReceiptIcon />
          Check
        </NavLink>
        <NavLink className={modules.FooterFont} to="/NotFound">
          <PersonOutlineIcon />
          Profile
        </NavLink>
      </div>
    );
  }
}
