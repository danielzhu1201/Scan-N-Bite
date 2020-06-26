import React, { useState } from "react";

import modules from './styles/InfoDescription.module.css'


const InfoDescription: React.FC = () => {
  const [title, useTitle] = useState('Info Section 1')
  const [content, useContent] = useState('Info here Info here Info here Info here Info here Info here Info here Info here Info here Info here Info here Info here Info here Info here Info here Info here Info here Info here Info here Info here Info here Info here Info here Info here ')

  return (
    <div className={modules.InfoDescription}>
      <h1 className={modules.InfoDescriptionTitle}>{title}</h1>
      <p className={modules.InfoDescriptionContent}>{content}</p>
    </div>
  )
}

export default InfoDescription;