import React from "react";

import UseModal from "../useModal"
import CreditCardModal from "./CreditCardModal";

import modules from "./styles/CreditCardButton.module.css";
export default function CreditCardButton() {

  const {isShowing, toggle} = UseModal();

  return (
    <div className={modules.Container}>
      <button className={modules.button} onClick={toggle}>Credit Card</button>
      <CreditCardModal
        isShowing={isShowing}
        hide={toggle}/>
    </div>
  );
}
