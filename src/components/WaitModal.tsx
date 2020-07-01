import React from 'react';
import ReactDom from 'react-dom';

import exit from "../exit.svg";
import checkmark from "../checkmark.svg";

import modules from "./styles/WaitModal.module.css"
const waitModal = ({isShowing, hide}) => isShowing ? ReactDom.createPortal(
    <React.Fragment>
        <div className={modules.modal}>
            <div className={modules.container}>
                <div className={modules.modalClose}>
            <img src={exit} className={modules.exit} onClick={hide} alt="TypePic"/>
            </div>
            <div className={modules.ModalPic}>
                <img src={checkmark} className={modules.Pic} alt="TypePic"/>
            </div>
            <div className={modules.modalText}>
                Someone will be with you shortly for checkout!
            </div>
        </div>
    </div>
    </React.Fragment>, document.body
) : null;

export default waitModal