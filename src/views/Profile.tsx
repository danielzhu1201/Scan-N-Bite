import React, { useState } from "react";
import { NavLink } from "react-router-dom";


import AccessibilityNewOutlinedIcon from '@material-ui/icons/AccessibilityNewOutlined';
import RestoreOutlinedIcon from '@material-ui/icons/RestoreOutlined';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined';

import Headline from "../components/Headline";
import LogOutButton from "../components/LogOutButton";
import { makeStyles } from "@material-ui/core/styles";

import modules from "../components/styles/Profile.module.css";


const useStyles = makeStyles({
  root: {
    color: "grey",
    fontSize: "40px",
    textDecoration: "none",
  },
});

const Profile: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={modules.Container}>
      <div>
        <Headline title="User Name Here!" imageURL="/Fruits.jpg" />
        <div className={modules.ProfileWrapper}>
          <NavLink to="/">
            <p className={modules.ProfileText}>
              <AccessibilityNewOutlinedIcon
                classes={{
                  root: classes.root,
                }}
              />
            My Profile
            <NavigateNextOutlinedIcon />
            </p>
          </NavLink>
          <NavLink to="/specific">
            <RestoreOutlinedIcon
              classes={{
                root: classes.root,
              }}
            />
            <p className={modules.ProfileText}>
              Dining History
            </p>
          </NavLink>
          <NavLink to="/check">
            <p>
              <PublicOutlinedIcon
                classes={{
                  root: classes.root,
                }}
              />
            About Me
                <NavigateNextOutlinedIcon />
            </p>
          </NavLink>
        </div>
      </div>
      <div>
        <LogOutButton />
      </div>
    </div>
  );
};

export default Profile;
