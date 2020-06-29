import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import ReceiptIcon from "@material-ui/icons/Receipt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { makeStyles } from "@material-ui/core/styles";

import modules from "./styles/ComFooter.module.css";

const useStyles = makeStyles({
  root: {
    color: "#6e501b",
    fontSize: "31px",
    textDecoration: "none",
  },
});

export default function ComFooter() {
  const classes = useStyles();
  return (
    <div className={modules.Footer}>
      <NavLink className={modules.FooterLink} to="/">
        <RestaurantIcon
          classes={{
            root: classes.root,
          }}
        />
        <p className={modules.FootText}>Menu</p>
      </NavLink>
      <NavLink className={modules.FooterLink} to="/check">
        <ReceiptIcon
          classes={{
            root: classes.root,
          }}
        />
        <p className={modules.FootText}>Check</p>
      </NavLink>
      <NavLink className={modules.FooterLink} to="/profile">
        <PersonOutlineIcon
          classes={{
            root: classes.root,
          }}
        />
        <p className={modules.FootText}>Profile</p>
      </NavLink>
    </div>
  );
}
