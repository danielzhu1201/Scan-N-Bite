import React from "react";

import logo from "../logo.svg";

import modules from "./styles/CheckItems.module.css";
export default function CheckItem() {
  const itemName = "Item Name Here!";
  const itemQuantity = "1";
  const itemCost = "$ 5.75";

  return (
    <div className={modules.Item}>
      <div>
        <div className={modules.ItemName}>
          {itemName}
          <span className={modules.ItemQuant}>x{itemQuantity} </span>
        </div>
        <div className={modules.ItemPrice}>{itemCost}</div>
      </div>
      <div>
        <img src={logo} className={modules.ItemPic} />
      </div>
    </div>
  );
}
