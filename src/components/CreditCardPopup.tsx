import React from "react";

import logo from "../logo.svg";

import modules from "./styles/.module.css";

export default function WaitPopup() {
  return (
    <div className={modules.modal}>
        <div className={modules.container}>
            <div className={modules.modalClose}>
                <img src={logo} className={modules.exit} alt="TypePic"/>
            </div>
            <div className={modules.ModalPic}>
                <img src={logo} className={modules.Pic} alt="TypePic"/>
            </div>
            <div className={modules.modalText}>
                Someone will be with you shortly for checkout!
            </div>
        </div>
    </div>
  );
}
