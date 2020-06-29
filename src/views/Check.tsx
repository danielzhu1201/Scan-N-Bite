import React from "react";

import CheckItem from "../components/CheckItems";
import CheckOutButtion from "../components/CheckoutButton";
import logo from "../logo.svg";

import modules from "../components/styles/CheckBody.module.css";

function Check() {
  return (
    <div className={modules.Container}>
      <img src={logo} className={modules.TypeLogo} alt="TypePic" />
      <div className={modules.CheckTitle}> Your Check</div>
      <div className={modules.Check}>
        <div className={modules.OrderedItems}>
          <CheckItem />
          <CheckItem />
          <CheckItem />
          <CheckItem />
          <CheckItem />
          <CheckItem />
        </div>
        <CheckOutButtion />
      </div>
    </div>
  );
}

export default Check;
