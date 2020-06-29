import React from 'react'

import modules from "./styles/ItemOverview.module.css";

export default function ItemOverview() {
  const itemName = "Item name here!";
  const desc = "Description goes here. If too long, trunca....";
  const price = "$100.00";
  const cal = "150 Cal.";
  const imgURL = '/food.jpg'

  return (
    <div>
      <h1 className={modules.Name}>
        {itemName}
        <img src={process.env.PUBLIC_URL + imgURL} className={modules.ItemPic} />
      </h1>
      <h2 className={modules.Description}>{desc}</h2>
      <h3 className={modules.PriceCal}>{`${price} · ${cal}`}</h3>
    </div>
  )
}
