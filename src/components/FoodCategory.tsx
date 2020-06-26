import React, { useState } from "react";

import modules from "./styles/FoodCategory.module.css"

const imgURL = '/food.jpg'

const FoodCategory: React.FC = () => {
  const [category, setCategory] = useState('Food Type');
  const [description, setDescription] = useState('Descriptions here and they wrap!!');
  const [imageURL, setImageURL] = useState(imgURL);

  return (
    <div className={modules.FoodCatogory}>
      <img className={modules.FoodCategoryImg} src={process.env.PUBLIC_URL + imageURL} />
      <p className={modules.FoodCategoryCategoryName}>{category}</p>
      <p className={modules.FoodCategoryCategoryDesc}>{description}</p>
    </div>
  )
}

export default FoodCategory;