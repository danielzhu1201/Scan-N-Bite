import React from "react";

import CheckItem from "../components/CheckItems";
import VisaCheckOutButtion from "../components/VisaCheckOutButton";
import CreditCardButton from "../components/CreditCardButton";
import CashButton from "../components/cashButton";
import CheckTotal from "../components/CheckTotals";
import logo from "../logo.svg";

import modules from "../components/styles/CheckOut.module.css";


function CheckOut() {
  return (
    <div className={modules.Container}>
      <div className={modules.CheckTitle}> Your Check</div>
      <div className={modules.Check}>
        <div className={modules.OrderedItems}>
          <CheckItem />
          <CheckItem />
        </div>
        <div className={modules.SubTotal}>
          <hr className={modules.break}/>
          <CheckTotal/>    
        </div>
        <div className={modules.Buttons}>
          <VisaCheckOutButtion/>
          <CreditCardButton/>
          <CashButton/>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
