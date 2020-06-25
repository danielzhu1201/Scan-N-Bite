import React from "react";
import logo from "../logo.svg";
import { Container } from "@material-ui/core";

export default function CheckBody() {
    const itemName = "Item Name Here!"
    const itemQuantity = "1"
    const itemCost = "$ 5.75"

    return (
      <div className="flex-container">
          <div className="img">
                <img src={logo} className="type-logo" alt="logo" />
            </div>
          <div className="check">
            <div className="checkHeader">
                <h1 className="checkHeaderText"> Your Check</h1>
            </div>
            <div className="Item">
                <div className="ItemName">
                    {itemName} x{`${itemQuantity}`}
                    <img src={logo} className="item-pic" />
                    <div className="ItemCost">
                    {itemCost}
                </div>
                </div>
            </div>
        </div>    
        <div className="CheckOut">
              <button type="button" className="checkoutButton">
                  <div className="buttonText">
                    Checkout
                  </div>
              </button>
            </div>
    </div> 
    );
  }