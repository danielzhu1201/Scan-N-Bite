import React, { useState } from "react";

import modules from "./styles/InfoDescription.module.css";

interface InfoDescriptionProps {
  title: string;
  content: string;
}

const InfoDescription: React.FC<InfoDescriptionProps> = ({
  title,
  content,
}) => {
  return (
    <div className={modules.InfoDescription}>
      <h1 className={modules.InfoDescriptionTitle}>{title}</h1>
      <p className={modules.InfoDescriptionContent}>{content}</p>
    </div>
  );
};

export default InfoDescription;
