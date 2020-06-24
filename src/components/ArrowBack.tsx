import React, { Component } from 'react';
import { useHistory } from "react-router-dom";

function ArrowBack() {
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <button type="button" onClick={handleClick} className="top-arrow">
      Arrow
    </button>
  );
}

export default ArrowBack;