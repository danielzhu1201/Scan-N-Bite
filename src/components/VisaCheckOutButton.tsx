import React from "react";

import modules from "./styles/VisaCheckOutButton.module.css";
export default function VisaCheckOutButton() {
  return (
    <div className={modules.Container}>
      <button className={modules.button}>Visa Check Out</button>
    </div>
  );
}
