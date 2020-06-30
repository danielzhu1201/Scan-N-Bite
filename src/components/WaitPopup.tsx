import React from "react";

import modules from "./styles/.module.css";
export default function waitPopUp() {
  return (
    <div className={modules.Container}>
      <button className={modules.button}>Visa Check Out</button>
    </div>
  );
}
