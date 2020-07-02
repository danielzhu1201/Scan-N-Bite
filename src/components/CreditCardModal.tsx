import React from "react";
import ReactDom from "react-dom";
import { NavLink } from "react-router-dom";
import exit from "../exit.svg";

import modules from "./styles/CreditCardModal.module.css";
const waitModal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDom.createPortal(
        <React.Fragment>
          <div className={modules.modal}>
            <div className={modules.container}>
              <div className={modules.modalClose}>
                <img
                  src={exit}
                  className={modules.exit}
                  onClick={hide}
                  alt="TypePic"
                />
              </div>
              <form className={modules.CreditCardForm}>
                <div className={modules.InputWrapper}>
                  <input
                    type="text"
                    className={modules.Name}
                    placeholder="Name"
                  />
                </div>
                <div className={modules.InputWrapper}>
                  <input
                    type="number"
                    className={modules.Name}
                    placeholder="Credit Card Number"
                  />
                </div>
                <div className={modules.ExpirationDate}>
                  <input
                    type="number"
                    className={modules.CreditCardExpirationDate}
                    placeholder="Expiration Month"
                  />
                  <div className={modules.Slash}>/</div>
                  <input
                    type="number"
                    className={modules.CreditCardExpirationDate}
                    placeholder="Expiration Year"
                  />
                </div>
                <div className={modules.InputWrapper}>
                  <input
                    type="number"
                    className={modules.Name}
                    placeholder="CVV"
                  />
                </div>
                <div className={modules.InputWrapper}>
                  <NavLink style={{ textDecoration: "none" }} to="/success">
                    <button className={modules.CCPay}>Pay</button>
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default waitModal;
