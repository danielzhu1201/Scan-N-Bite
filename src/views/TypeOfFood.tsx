import React from "react";

import ItemOverview from "../components/ItemOverview";

import modules from "../components/styles/TypeOfFood.module.css";

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
        <ItemOverview />
        <ItemOverview />
        <ItemOverview />
        <ItemOverview />
        <ItemOverview />
        <ItemOverview />
      </div>
    </div>
  );
}

export default TypeOfFood;
