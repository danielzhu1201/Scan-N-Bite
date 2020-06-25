import React from "react";
import logo from "../logo.svg";

import ItemOverview from "./ItemOverview";

import modules from "./styles/MenuItems.module.css"

export default class MenuItems extends React.Component {
  render() {
    return (
      <div>
        <img src={logo} className={modules.TypeLogo} alt="TypePic" />
        <div className={modules.Menu}>
          <h1 className={modules.SubText}>Menu</h1>
          <div className={modules.MenuItems}>
            <ItemOverview />
            <ItemOverview />
            <ItemOverview />
          </div>
        </div>
      </div >
    );
  }
}

