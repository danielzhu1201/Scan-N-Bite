import React from "react";


import modules from "./styles/LogoutButton.module.css";
export default function LogOutButton() {
  return (
    <div className={modules.Container}>
      <button className={modules.button}>Logout</button>
    </div>
  );
}