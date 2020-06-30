import React from "react";

import ItemOverview from "./ItemOverview";

import modules from "./styles/MenuItems.module.css";

const imgURL = "/Fruits.jpg";
export default class MenuItems extends React.Component {
  render() {
    return (
      <div>
        <img
          src={process.env.PUBLIC_URL + imgURL}
          className={modules.TypeLogo}
          alt="TypePic"
        />
        <div className={modules.Menu}>
          <h1 className={modules.SubText}>Menu</h1>
          <div className={modules.MenuItems}>
            <ItemOverview
              itemName="Item name here!"
              desc="Description goes here. If too long If too long If toong If toong If toong If toong If toong If too long, truncatruncatrunca...."
              price="$100.00"
              cal="150 Cal."
              imageURL="/food.jpg"
            />
            <ItemOverview
              itemName="Item name here!"
              desc="Description goes here. If too long If too long If toong If toong If toong If toong If toong If too long, truncatruncatrunca...."
              price="$100.00"
              cal="150 Cal."
              imageURL="/food.jpg"
            />
            <ItemOverview
              itemName="Item name here!"
              desc="Description goes here. If too long If too long If toong If toong If toong If toong If toong If too long, truncatruncatrunca...."
              price="$100.00"
              cal="150 Cal."
              imageURL="/food.jpg"
            />
          </div>
        </div>
      </div>
    );
  }
}
