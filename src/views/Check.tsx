import React, { useState, useEffect } from "react";

import CheckItem from "../components/CheckItems";
import CheckOutButtion from "../components/CheckoutButton";
import logo from "../logo.svg";

import modules from "../components/styles/CheckBody.module.css";
import CheckTotals from "../components/CheckTotals";
import VisaCheckOutButton from "../components/VisaCheckOutButton";
import CreditCardButton from "../components/CreditCardButton";
import CashButton from "../components/cashButton";

function Check() {
  const [checkOut,setCheckOut] = useState(false);

  var changeMargin = {
    margin: "0px 0px 50px 0px"
  };

  var checkItems,checkBalances,paymentOptions;
  if(checkOut){
    changeMargin.margin = "10px"
    checkBalances = <CheckTotals/>
    paymentOptions = <div className={modules.Buttons}>
      <VisaCheckOutButton/>
      <CreditCardButton/>
      <CashButton/> 
    </div>
  }
  else {
    paymentOptions = <CheckOutButtion beginCheckout={setCheckOut}/>
  }

  return (
    <div className={modules.Container}>
      <img src={logo} className={modules.TypeLogo} alt="TypePic" />
      <div className={modules.CheckTitle}> Your Check</div>
      <div className={modules.Check}>
      <div className={modules.OrderedItems} style={changeMargin}>
        <CheckItem />
        <CheckItem />
        <CheckItem />
        <CheckItem />
        <CheckItem />
        <CheckItem />
      </div>
        {checkBalances}
        {paymentOptions}
      </div>
    </div>
  );
}

export default Check;
