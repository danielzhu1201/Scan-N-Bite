import React from "react";

import Headline from '../../../components/Headline'
import FoodCategory from '../../../components/FoodCategory'

const MenuCategory: React.FC = () => {
  return (
    <div className = 'menuCategory'>
      <Headline />
      <div>
        <FoodCategory />
        <FoodCategory />
        <FoodCategory />
        <FoodCategory />
      </div>
    </div>
  )
}

export default MenuCategory;


