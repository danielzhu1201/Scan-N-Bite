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
  const [userName, setUserName] = useState("UserName Here");

  const authListener = () => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        var displayName = user.displayName || "";
        if (displayName.length === 0) {
          user.updateProfile({
            displayName: "Zhaosong Zhu",
          });
          displayName = "Zhaosong Zhu";
        }
        setUserName(displayName);
        setUser(true);
        const userRef = firebaseApp
          .firestore()
          .collection("users")
          .doc(user.uid!);
        userRef.get().then((snapshot) => {
          if (!snapshot.exists) {
            userRef.set({});
          }
        });
      } else {
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
            <Headline title={userName} imageURL="/Fruits.jpg" />
            <div className={modules.wrapper}>
              <NavLink style={{ textDecoration: "none" }} to="/orders">
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
                  <p className={modules.ProfileTexttext}>About Us</p>
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
