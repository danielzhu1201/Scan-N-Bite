import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import AccessibilityNewOutlinedIcon from "@material-ui/icons/AccessibilityNewOutlined";
import RestoreOutlinedIcon from "@material-ui/icons/RestoreOutlined";
import PublicOutlinedIcon from "@material-ui/icons/PublicOutlined";
import NavigateNextOutlinedIcon from "@material-ui/icons/NavigateNextOutlined";

import Headline from "../components/Headline";
import LogOutButton from "../components/LogOutButton";
import { makeStyles } from "@material-ui/core/styles";
import firebaseApp from "../config/firebase";
import Login from "../views/Login";

import modules from "./styles/Profile.module.css";

const useStyles = makeStyles({
  root: {
    color: "grey",
    fontSize: "40px",
    textDecoration: "none",
    paddingTop: "5px",
  },
  arrowRoot: {
    color: "grey",
    fontSize: "45px",
    textDecoration: "none",
    paddingTop: "5px",
  },
});

const Profile: React.FC = () => {
  const classes = useStyles();
  const [user, setUser] = useState(false);

  const authListener = () => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        setUser(true);
      } else {
        console.log("no user");
        setUser(false);
      }
    });
  };

  useEffect(() => {
    authListener();
  });

  return (
    <div>
      {user ? (
        <div className={modules.Container}>
          <div>
            <Headline title="User Name Here!" imageURL="/Fruits.jpg" />
            <div className={modules.wrapper}>
              <NavLink style={{ textDecoration: "none" }} to="/">
                <div className={modules.ProfileIcon}>
                  <AccessibilityNewOutlinedIcon
                    classes={{
                      root: classes.root,
                    }}
                  />
                </div>
                <div className={modules.ProfileText}>
                  <p className={modules.ProfileTexttext}>My Profile</p>
                </div>
                <div className={modules.ProfileArrow}>
                  <NavigateNextOutlinedIcon
                    classes={{
                      root: classes.arrowRoot,
                    }}
                  />
                </div>
              </NavLink>
            </div>
            <div className={modules.wrapper}>
              <NavLink style={{ textDecoration: "none" }} to="/">
                <div className={modules.ProfileIcon}>
                  <RestoreOutlinedIcon
                    classes={{
                      root: classes.root,
                    }}
                  />
                </div>
                <div className={modules.ProfileText}>
                  <p className={modules.ProfileTexttext}>Dining History</p>
                </div>
                <div className={modules.ProfileArrow}>
                  <NavigateNextOutlinedIcon
                    classes={{
                      root: classes.arrowRoot,
                    }}
                  />
                </div>
              </NavLink>
            </div>
            <div className={modules.wrapper}>
              <NavLink style={{ textDecoration: "none" }} to="/">
                <div className={modules.ProfileIcon}>
                  <PublicOutlinedIcon
                    classes={{
                      root: classes.root,
                    }}
                  />
                </div>
                <div className={modules.ProfileText}>
                  <p className={modules.ProfileTexttext}>About Me</p>
                </div>
                <div className={modules.ProfileArrow}>
                  <NavigateNextOutlinedIcon
                    classes={{
                      root: classes.arrowRoot,
                    }}
                  />
                </div>
              </NavLink>
            </div>
          </div>
          <div>
            <LogOutButton />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Profile;
