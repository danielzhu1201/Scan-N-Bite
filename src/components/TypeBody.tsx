import React from 'react'
import logo from "../logo.svg";

export default function TypeBody() {
  return (
    <div className="menu-body">
      <img src={logo} className="type-logo" alt="logo" />
      <div className="menu">
        <h1 className="sub-text">Menu</h1>
        <div className="menu-items">
          <div className="item1">
            <h1 className="name">Item Name Here!<img src={logo} className="item-pic" /></h1>
            <h2 className="description">Description goes here. If too long, trunca....</h2>
            <h3 className="price">$ 100.00 · 150 Cal.</h3>
            {/* <NavLink to='/menu/specific/item-1'>item1</NavLink> */}
          </div>
          <div className="item2">
            <h1 className="name">Item Name Here!<img src={logo} className="item-pic" /></h1>
            <h2 className="description">Description goes here. If too long, trunca....</h2>
            <h3 className="price">$ 100.00 · 150 Cal.</h3>
            {/* <NavLink to='/menu/specific/item-2'>item1</NavLink> */}
          </div>
          <div className="item3">
            <h1 className="name">Item Name Here!<img src={logo} className="item-pic" /></h1>
            <h2 className="description">Description goes here. If too long, trunca....</h2>
            <h3 className="price">$ 100.00 · 150 Cal.</h3>
            {/* <NavLink to='/menu/specific/item-3'>item1</NavLink> */}
          </div>
        </div>
      </div>
    </div>
  )
}
