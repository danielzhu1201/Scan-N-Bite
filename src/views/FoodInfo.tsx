import React, { useState } from "react";

// import Headline from '../../components/Headline'
import ArrowBack from "../components/ArrowBack";
import FoodInfoDescription from '../components/InfoDescription'
import OrderButton from '../components/OrderButton'
import Headline from '../components/Headline'

import modules from "../components/styles/FoodInfo.module.css"

const FoodInfo: React.FC = () => {

  return (
    <div className={modules.FoodInfo}>
      <div className={modules.FoodInfoHeadline}>
        {/* TODO: need add ArrowBack into headline, and use a props/redux to indicate showing arrowback or not */}
        <div className={modules.FoodInfoArrowBack}>
          <ArrowBack />
        </div>
        <Headline />
        <div className={modules.FoodInfoDescriptionWrapper}>
          <FoodInfoDescription />
          <FoodInfoDescription />
          <FoodInfoDescription />
        </div>
      </div>
      <div className={modules.FoodInfoOrderButton}>
        <OrderButton />
      </div>
    </div>
  )
}

export default FoodInfo;