import React from "react";

import modules from "./styles/CreditCardButton.module.css";
export default function CreditCardButton() {
  return (
    <div className={modules.Container}>
      <button className={modules.button}>Credit Card</button>
    </div>
  );
}
