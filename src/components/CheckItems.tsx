import React from 'react'

import logo from "../logo.svg";

import modules from "./styles/CheckItems.module.css"
export default function checkItem() {
    const itemName = "Item Name Here!"
    const itemQuantity = "1"
    const itemCost = "$ 5.75"
  
    return (
      <div className={modules.item}>
        <h1 className={modules.itemName}>
            {itemName}
            <div className={modules.itemQuant}>x{itemQuantity} </div>
            <img src={logo} className={modules.itemPic}/>
        </h1>
        <h2 className={modules.itemPrice}>
            {itemCost}
        </h2>
      </div>
    )
  }
  