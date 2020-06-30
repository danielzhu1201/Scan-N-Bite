import React from "react";

import modules from "./styles/cashButton.module.css";
export default function CashButton() {
  return (
    <div className={modules.Container}>
      <button className={modules.button}>In Person</button>
    </div>
  );
}
