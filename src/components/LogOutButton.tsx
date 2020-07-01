import React from "react";
import firebaseApp from "../config/firebase";

import modules from "./styles/LogoutButton.module.css";
export default function LogOutButton() {
  return (
    <div className={modules.Container}>
      <button
        className={modules.button}
        onClick={() => {
          firebaseApp.auth().signOut();
        }}
      >
        Logout
      </button>
    </div>
  );
}
