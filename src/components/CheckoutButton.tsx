import React from "react";

import modules from "./styles/CheckOutButton.module.css";
export default function CheckoutButton(props) {
  
  return (
    <div className={modules.Container}>
      <button className={modules.button} onClick={() => props.beginCheckout(true)}>Check Out</button>
    </div>
  );
}
