import React from "react";

import Divider from "@material-ui/core/Divider";

import modules from "./styles/Headline.module.css";

interface HeadlineProps {
  title: string;
  imageURL: string;
}

const Headline: React.FC<HeadlineProps> = ({ title, imageURL }) => {
  return (
    <div className={modules.Headline}>
      <img className={modules.HeadlineImg} src={imageURL} alt={"Headline"} />
      <div className={modules.HeadlineTitle}>{title}</div>
      <Divider style={{ width: "80%", margin: "10px 0px" }} />
    </div>
  );
};

export default Headline;
