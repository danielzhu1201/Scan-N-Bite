import React from "react";

import ItemOverview from "../components/ItemOverview";

import modules from "./styles/TypeOfFood.module.css";

const imgURL = "/Fruits.jpg";

function TypeOfFood() {
  return (
    <div className={modules.Container}>
      <img
        className={modules.Banner}
        src={process.env.PUBLIC_URL + imgURL}
        alt={"Item Pic here"}
      />
      <div className={modules.TitleText}>Select Your Favourite Dishes</div>
      <div className={modules.ItemContainer}>
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
  );
}

export default TypeOfFood;
