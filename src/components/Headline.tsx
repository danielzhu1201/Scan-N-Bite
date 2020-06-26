import React, { useState } from "react";

import modules from "./styles/Headline.module.css"

// import ArrowBack from '../ArrowBack'
// const imgURL = '/popeyes.jpg'
const imgURL = '/Fruits.jpg'

const Headline: React.FC = () => {
  const [title, setTitle] = useState('Bon Appétit!');
  const [imageURL, setImageURL] = useState(imgURL);

  return (
    <div className={modules.Headline}>
      <img className={modules.HeadlineImg} src={process.env.PUBLIC_URL + imageURL} />
      <div className={modules.HeadlineTitle}>{title}</div>
      <hr className={modules.HeadlineLine} />
    </div>
  )
}

export default Headline;
