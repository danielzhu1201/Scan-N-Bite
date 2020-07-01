import React, { useState } from "react";

// import Headline from '../../components/Headline'
import ArrowBack from "../components/ArrowBack";
import FoodInfoDescription from "../components/InfoDescription";
import OrderButton from "../components/OrderButton";
import Headline from "../components/Headline";

import modules from "./styles/FoodInfo.module.css";

const title = "Info Section";
const info =
  "Info here Info here Info here Info here Info here Info here Info here Info here Info here Info here Info here Info here Info here Info here Info here Info here Info here Info here Info here Info here Info here Info here Info here Info here";
const price = "$5.75";

const FoodInfo: React.FC = () => {
  return (
    <div className={modules.Container}>
      <div className={modules.FoodInfoHeadline}>
        {/* TODO: need add ArrowBack into headline, and use a props/redux to indicate showing arrowback or not */}
        <Headline title="Bon Appétit!" imageURL="/Fruits.jpg" />
        <div className={modules.FoodInfoDescriptionWrapper}>
          <FoodInfoDescription title={title} content={info} />
          <FoodInfoDescription title={title} content={info} />
          <FoodInfoDescription title={title} content={info} />
        </div>
      </div>
      <div className={modules.FoodInfoOrderButton}>
        <OrderButton price={price} />
      </div>
    </div>
  );
};

export default FoodInfo;
