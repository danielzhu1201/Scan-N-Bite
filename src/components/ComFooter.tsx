import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";
import RestaurantOutlinedIcon from '@material-ui/icons/RestaurantOutlined';
import LocalBarOutlinedIcon from '@material-ui/icons/LocalBarOutlined';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
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
        <RestaurantOutlinedIcon
          classes={{
            root: classes.root,
          }}
        />
        <p className={modules.FootText}>Menu</p>
      </NavLink>
      <NavLink className={modules.FooterLink} to="/specific">
        <LocalBarOutlinedIcon
          classes={{
            root: classes.root,
          }}
        />
        <p className={modules.FootText}>Drinks</p>
      </NavLink>
      <NavLink className={modules.FooterLink} to="/check">
        <ReceiptOutlinedIcon
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
