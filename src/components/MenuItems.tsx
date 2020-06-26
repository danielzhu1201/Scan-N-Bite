import React from "react";

import ItemOverview from "./ItemOverview";

import modules from "./styles/MenuItems.module.css"

const imgURL = '/Fruits.jpg'
export default class MenuItems extends React.Component {
  render() {
    return (
      <div>
        <img src={process.env.PUBLIC_URL + imgURL} className={modules.TypeLogo} alt="TypePic" />
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

