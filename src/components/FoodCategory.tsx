import React, { useState } from "react";

import modules from "./styles/FoodCategory.module.css";

const imgURL = "/food.jpg";

interface FoodCategoryProps {
  category: string;
  desc: string;
}

const FoodCategory: React.FC<FoodCategoryProps> = ({ category, desc }) => {
  const [imageURL, setImageURL] = useState(imgURL);

  return (
    <div className={modules.FoodCatogory}>
      <img
        className={modules.FoodCategoryImg}
        src={process.env.PUBLIC_URL + imageURL}
      />
      <p className={modules.FoodCategoryCategoryName}>{category}</p>
      <p className={modules.FoodCategoryCategoryDesc}>{desc}</p>
    </div>
  );
};

export default FoodCategory;
