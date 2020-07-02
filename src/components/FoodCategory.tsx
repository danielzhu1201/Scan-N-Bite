import React from "react";

import modules from "./styles/FoodCategory.module.css";

interface FoodCategoryProps {
  category: string;
  desc: string;
  img: string;
}

const FoodCategory: React.FC<FoodCategoryProps> = ({ category, desc, img }) => {
  return (
    <div className={modules.FoodCatogory}>
      <img
        className={modules.FoodCategoryImg}
        src={img}
        alt={"Food Category"}
      />
      <p className={modules.FoodCategoryCategoryName}>{category}</p>
      <p className={modules.FoodCategoryCategoryDesc}>{desc}</p>
    </div>
  );
};

export default FoodCategory;
