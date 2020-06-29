import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Headline from "../components/Headline";
import FoodCategory from "../components/FoodCategory";

import modules from "../components/styles/Category.module.css";

const Category: React.FC = () => {
  const matches = useMediaQuery("(min-width:360px)");
  console.log(matches);
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
