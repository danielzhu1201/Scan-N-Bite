import React from "react";

import Headline from '../../../components/Headline'
import FoodCategory from '../../../components/FoodCategory'

import './style.css'

const MenuCategory: React.FC = () => {
  return (
    <div className='menuCategory'>
        <div>
          <Headline />
        </div>
        <div className='menuCategory__categoryWrapper'>
        <div className='menuCategory__category'>
            <FoodCategory />
          </div>
          <div className='menuCategory__category'>
            <FoodCategory />
          </div>
          <div className='menuCategory__category'>
            <FoodCategory />
          </div>
          <div className='menuCategory__category'>
            <FoodCategory />
          </div>
        </div>
    </div>
  )
}

export default MenuCategory;


