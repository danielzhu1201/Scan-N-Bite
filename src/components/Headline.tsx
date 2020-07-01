import React, { useState } from "react";

import Divider from "@material-ui/core/Divider";

import modules from "./styles/Headline.module.css";

interface HeadlineProps {
  title: string;
  imageURL: string;
}

const Headline: React.FC<HeadlineProps> = ({ title, imageURL }) => {
  return (
    <div className={modules.Headline}>
      <img className={modules.HeadlineImg} src={imageURL} />
      <div className={modules.HeadlineTitle}>{title}</div>
      <Divider style={{ width: "300px", margin: "10px 0px" }} />
    </div>
  );
};

export default Headline;
