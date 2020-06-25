import React, {useState} from "react";

import './style.css'

const imgURL = '/popeyes.jpg'

const Headline: React.FC = () => {
  const [title, setTitle] = useState('Bon Appétit!');
  const [imageURL, setImageURL] = useState(imgURL);

  return (
    <div className="headline">
      <img className="headline__img" src={process.env.PUBLIC_URL + imageURL} />
      <div className="headline__title">{title}</div>
      <hr className='headline__line'/>
    </div>
  )
}

export default Headline;
