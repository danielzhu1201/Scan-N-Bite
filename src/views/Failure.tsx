import React from "react";
import { withRouter } from "react-router-dom";

import ErrorMark from "../errormark.svg";

import modules from "./styles/CheckOutStatus.module.css";

const Failure = withRouter(({ props }) => {
  return (
    <div className={modules.Container}>
      <img src={ErrorMark} alt="ErrorMark" />
      <div className={modules.Text}>Failure</div>
    </div>
  );
});

export default Failure;
