import React from "react";

import modules from "./styles/ItemOverview.module.css";

interface ItemOverviewProps {
  itemName: string;
  desc: string;
  price: string;
  cal: string;
  imageURL: string;
}

const ItemOverview: React.FC<ItemOverviewProps> = ({
  itemName,
  desc,
  price,
  cal,
  imageURL,
}) => {
  return (
    <div className={modules.Container}>
      <div className={modules.TextContainer}>
        <div className={modules.Name}>{itemName}</div>
        <div className={modules.Description}>{desc}</div>
        <div className={modules.PriceCal}>{`${price} · ${cal}`}</div>
      </div>
      <div className={modules.ImageContainer}>
        <img src={imageURL} className={modules.ItemPic} alt={"Item"} />
      </div>
    </div>
  );
};

export default ItemOverview;
