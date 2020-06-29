import React from "react";

import modules from "./styles/ItemOverview.module.css";

export default function ItemOverview() {
  const itemName = "Item name here!";
  const desc = "Description goes here. If too long, truncatruncatrunca....";
  const price = "$100.00";
  const cal = "150 Cal.";
  const imgURL = "/food.jpg";

  return (
    <div className={modules.Container}>
      <div className={modules.TextContainer}>
        <h1 className={modules.Name}>{itemName}</h1>
        <div className={modules.Description}>{desc}</div>
        <div className={modules.PriceCal}>{`${price} · ${cal}`}</div>
      </div>
      <div className={modules.ImageContainer}>
        <img
          src={process.env.PUBLIC_URL + imgURL}
          className={modules.ItemPic}
        />
      </div>
    </div>
  );
}
