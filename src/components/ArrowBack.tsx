import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import modules from "./styles/ArrowBack.module.css";

function ArrowBack() {
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <button className={modules.TopArrow} type="button" onClick={handleClick}>
      <ArrowBackIcon fontSize="large" />
    </button>
  );
}

export default ArrowBack;
