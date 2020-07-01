import React from "react";

import UseModal from "../useModal";
import WaitModal from "./WaitModal";

import modules from "./styles/cashButton.module.css";
export default function CashButton() {

  const {isShowing, toggle} = UseModal();

  return (
    <div className={modules.Container}>
      <button className={modules.button} onClick={toggle}>In Person</button>
      <WaitModal
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  );
}
