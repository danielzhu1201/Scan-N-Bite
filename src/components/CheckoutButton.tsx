import React from 'react'

import logo from "../logo.svg";
import modules from "./styles/CheckOutButton.module.css"
export default function CheckoutButton() {
    return (
      <div className={modules.wrapper}>
        <button className={modules.button}>Check Out</button>
      </div>
    )
  }