import React from "react";

import modules from "./styles/cashButton.module.css";
import useModal from "../useModal";
import waitModal from "../WaitModal"

export default function CashButton() {

  const {isShowing, toggle} = useModal();

  return (
    <div className={modules.Container}>
      <button className={modules.button}>In Person</button>
    </div>
  );
}
