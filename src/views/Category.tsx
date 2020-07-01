import React from "react";

import Headline from "../components/Headline";
import FoodCategory from "../components/FoodCategory";

import modules from "./styles/Category.module.css";

const Category: React.FC = () => {
  return (
    <div className={modules.Container}>
      <div>
        <Headline title="Bon Appétit!" imageURL="/Fruits.jpg" />
      </div>
      <div className={modules.FoodCategory}>
        <FoodCategory
          category="Appetizers"
          desc="Descriptions here and they wrap they wrap they wrap they wrap they wrap!!"
        />
        <FoodCategory
          category="Appetizers"
          desc="Descriptions here and they wrap they wrap they wrap they wrap they wrap!!"
        />
        <FoodCategory
          category="Appetizers"
          desc="Descriptions here and they wrap they wrap they wrap they wrap they wrap!!"
        />
        <FoodCategory
          category="Appetizers"
          desc="Descriptions here and they wrap they wrap they wrap they wrap they wrap!!"
        />
        <FoodCategory
          category="Appetizers"
          desc="Descriptions here and they wrap they wrap they wrap they wrap they wrap!!"
        />
        <FoodCategory
          category="Appetizers"
          desc="Descriptions here and they wrap they wrap they wrap they wrap they wrap!!"
        />
      </div>
    </div>
  );
};

export default Category;
