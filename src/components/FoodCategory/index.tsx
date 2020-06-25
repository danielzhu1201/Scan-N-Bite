import React, {useState} from "react";

import './style.css'

const imgURL = '/popeyes.jpg'

const FoodCategory: React.FC = () => {
  const [category, setCategory] = useState('Food Type');
  const [description, setDescription] = useState('Descriptions here and they wrap!!');
  const [imageURL, setImageURL] = useState(imgURL);

  return (
    <div className="foodCatogory">
      <img className="foodCategory__img" src={process.env.PUBLIC_URL + imageURL} />
      <p className='foodCategory__categoryName'>{category}</p>
      <p className='foodCategory__categoryDesc'>{description}</p>
    </div>
  )
}

export default FoodCategory;