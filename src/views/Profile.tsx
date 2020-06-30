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
        <div>
          <NavLink style={{ textDecoration: 'none' }} to="/">
            <p className={modules.ProfileText}>
              <AccessibilityNewOutlinedIcon
                classes={{
                  root: classes.root,
                }}
              />{' '}
            My Profile
            <NavigateNextOutlinedIcon />
            </p>
          </NavLink>

          <NavLink style={{ textDecoration: 'none' }} to="/">
            <p className={modules.ProfileText}>
              <RestoreOutlinedIcon
                classes={{
                  root: classes.root,
                }}
              />{' '}
              Dining History<NavigateNextOutlinedIcon />
            </p>
          </NavLink>

          <NavLink style={{ textDecoration: 'none' }} to="/">
            <p className={modules.ProfileText}>
              <PublicOutlinedIcon
                classes={{
                  root: classes.root,
                }}
              /> {' '}
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
