import React from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Headline from '../components/Headline'
import FoodCategory from '../components/FoodCategory'

import modules from "../components/styles/Category.module.css"

const Category: React.FC = () => {
  const matches = useMediaQuery('(min-width:360px)');
  console.log(matches)
  return (
    <div className={modules.MenuCategory}>
      <div>
        <Headline />
      </div>
        {!matches ? 
          (
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
          )
          :
          (
            <div className={modules.MenuCategoryCategoryWrapper}>
              <div className={modules.menuCategory__category__left}>
                <FoodCategory />
              </div>
              <div className={modules.menuCategory__category__right}>
                <FoodCategory />
              </div>
              <div className={modules.menuCategory__category__left}>
                <FoodCategory />
              </div>
              <div className={modules.menuCategory__category__right}>
                <FoodCategory />
              </div>
              <div className={modules.menuCategory__category__left}>
                <FoodCategory />
              </div>
              <div className={modules.menuCategory__category__right}>
                <FoodCategory />
              </div>
            </div>
          )
        }
    </div>
  )
}

export default Category;


