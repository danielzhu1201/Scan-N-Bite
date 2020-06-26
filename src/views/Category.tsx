import React from "react";

// import Headline from '../../../components/Headline'
import FoodCategory from '../components/FoodCategory'

import modules from "../components/styles/Category.module.css"

const Category: React.FC = () => {
  return (
    <div className={modules.MenuCategory}>
      {/* <div>
          <Headline />
        </div> */}
      <div className={modules.MenuCategoryCategoryWrapper}>
        <div className={modules.MenuCategoryCategory}>
          <FoodCategory />
        </div>
        <div className={modules.MenuCategoryCategory}>
          <FoodCategory />
        </div>
        <div className={modules.MenuCategoryCategory}>
          <FoodCategory />
        </div>
        <div className={modules.MenuCategoryCategory}>
          <FoodCategory />
        </div>
        <div className={modules.MenuCategoryCategory}>
          <FoodCategory />
        </div>
        <div className={modules.MenuCategoryCategory}>
          <FoodCategory />
        </div>
      </div>
    </div>
  )
}

export default Category;


