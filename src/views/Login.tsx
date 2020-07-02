import React, { Component } from "react";
import firebaseApp from "../config/firebase";
import "firebase/auth";
import uiConfig from "../config/uiConfig";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Divider from "@material-ui/core/Divider";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";

import modules from "./styles/Login.module.css";

class Login extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      password: "",
      imageURL: "/Fruits.jpg",
    };
  }

  login = (e) => {
    e.preventDefault();
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log("success");
      })
      .catch((error) => {
        ToastsStore.error(error.message);
      });
  };

  signup = (e) => {
    e.preventDefault();
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        ToastsStore.error(error.message);
      });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className={modules.containers}>
        <ToastsContainer
          store={ToastsStore}
          position={ToastsContainerPosition.TOP_CENTER}
          lightBackground={true}
        />
        <div className={modules.loginHeadline}>
          <img src={process.env.PUBLIC_URL + this.state.imageURL} />
          <p className={modules.loginTitle}>
            <span>Sign In for a Mobile</span>
            <span>Dining Experience!</span>
          </p>
        </div>
        {/*<div className={modules.LoginContainer}>
          <TextField
            className={modules.loginInputEmail}
            value={this.state.email}
            onChange={this.handleChange}
            type="email"
            name="email"
            id="txtEmail"
            placeholder="Email"
          />
          <TextField
            className={modules.loginInputPassword}
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            name="password"
            id="txtPassword"
            placeholder="Password"
          />
          <div className={modules.loginNote}>
            We will sign up for you if you’re a first-time user!
          </div>
          <button
            className={modules.loginSignIn}
            type="submit"
            onClick={this.login}
          >
            <p>Sign In</p>
          </button>

    */}
        <Divider style={{ width: "65%", margin: "0px 0px 5px 0px" }} />
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebaseApp.auth()}
        />
      </div>
    );
  }
}

export default Login;
