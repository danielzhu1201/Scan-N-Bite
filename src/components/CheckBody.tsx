import React from "react"

export default function CheckBody() {
    const itemName = "Item Name Here"
    const itemQuantity = "1"
    const itemCost = "75.00"

    return (
      <div className="check-body">
          <div className="check">
              <h1 className="CheckTitle">Your Check</h1>
              <div className="checkItems">
                  <div className="Item1">
                      <h1 className="ItemName">
                          {itemName}
                      </h1>
                      <h2 className="ItemCost">
                          {itemCost}
                      </h2>
                      <h3>
                        x{`${itemQuantity}`}
                      </h3>
                  </div>
              </div>
          </div>
          <div className="CheckOut">
              <button type="button">Checkout</button>
          </div>
        </div>
    );
  }