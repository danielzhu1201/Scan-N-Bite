import React from "react";
import logo from "../logo.svg";
import { Container } from "@material-ui/core";

export default function CheckBody() {
    const itemName = "Item Name Here"
    const itemQuantity = "1"
    const itemCost = "75.00"

    return (
      <div className="flex-container">
          <div className="check">
            <div className="checkHeader">
                <h1 className="checkItems"> Your Check</h1>
            </div>
            <div className="Item">
                <h1 className="ItemName">
                    {itemName} x{`${itemQuantity}`}
                    <img src={logo} className="item-pic" />
                </h1>
                <h2 className="ItemCost">
                    {itemCost}
                </h2>
            </div>
            <div className="Item">
                <h1 className="ItemName">
                    {itemName} x{`${itemQuantity}`}
                    <img src={logo} className="item-pic" />
                </h1>
                <h2 className="ItemCost">
                    {itemCost}
                </h2>
            </div>
            <div className="Item">
                <h1 className="ItemName">
                    {itemName} x{`${itemQuantity}`}
                    <img src={logo} className="item-pic" />
                </h1>
                <h2 className="ItemCost">
                    {itemCost}
                </h2>
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