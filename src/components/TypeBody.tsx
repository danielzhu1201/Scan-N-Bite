import React from "react";
import logo from "../logo.svg";

export default function TypeBody() {
  const itemName = "Item name here!";
  const desc = "Description goes here. If too long, trunca....";
  const price = "$100.00";
  const cal = "150 Cal.";

  return (
    <div className="menu-body">
      <div className="menu">
        <h1 className="sub-text">Menu</h1>
        <div className="menu-items">
          <div className="item1">
            <h1 className="name">
              {itemName}
              <img src={logo} className="item-pic" />
            </h1>
            <h2 className="description">{desc}</h2>
            <h3 className="price">{`${price} · ${cal}`}</h3>
            {/* <NavLink to='/menu/specific/item-1'>item1</NavLink> */}
          </div>
          <div className="item2">
            <h1 className="name">
              Item Name Here!
              <img src={logo} className="item-pic" />
            </h1>
            <h2 className="description">
              Description goes here. If too long, trunca....
            </h2>
            <h3 className="price">$ 100.00 · 150 Cal.</h3>
            {/* <NavLink to='/menu/specific/item-2'>item1</NavLink> */}
          </div>
          <div className="item3">
            <h1 className="name">
              Item Name Here!
              <img src={logo} className="item-pic" />
            </h1>
            <h2 className="description">
              Description goes here. If too long, trunca....
            </h2>
            <h3 className="price">$ 100.00 · 150 Cal.</h3>
            {/* <NavLink to='/menu/specific/item-3'>item1</NavLink> */}
          </div>
        </div>
      </div>
    </div>
  );
}
