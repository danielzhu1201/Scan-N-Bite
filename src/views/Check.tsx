import React, { useState, useEffect } from "react";

import CheckItem from "../components/CheckItems";
import CheckOutButtion from "../components/CheckoutButton";
import logo from "../logo.svg";
import CheckTotals from "../components/CheckTotals";
import CreditCardButton from "../components/CreditCardButton";
import CashButton from "../components/cashButton";

import { Helmet } from "react-helmet";

import modules from "../views/styles/CheckBody.module.css";

function Check() {
  const [checkOut, setCheckOut] = useState(false);
  const [total, setTotal] = useState(0.0);

  var changeMargin = {
    margin: "0px 0px 50px 0px",
  };

  var checkBalances, paymentOptions;
  if (checkOut) {
    changeMargin.margin = "10px";
    checkBalances = (
      <CheckTotals subTotal={100.5} callBack={(val) => setTotal(val)} />
    );
    paymentOptions = (
      <div className={modules.Buttons}>
        <CreditCardButton />
        <CashButton />
      </div>
    );
  } else {
    paymentOptions = <CheckOutButtion beginCheckout={setCheckOut} />;
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
        <Helmet>
          <script type="text/javascript">
            {`function onVisaCheckoutReady() {
              console.log("Visa Checkout ready")
              V.init({
                apikey: "PQY61HUOVKXW1E1AITP621_jPkgtZlzt9320UI02Ergl9PF5g",
                encryptionKey: "W9O4GYP5A4UOXGU2RR4513FZ-EpKghPT6dT1QKiVvNFCzO5Ms",
                payment: {
                  cardBrands: ["VISA", "MASTERCARD", "AMEX", "DINERS", "DISCOVER"],
                },
                paymentRequest: {
                  currencyCode: "USD",
                  subtotal: "20.00",
                },
                dataLevel: "NONE",
              });
            }`}
          </script>
        </Helmet>
        <img
          alt="Visa Checkout"
          className="v-button"
          role="button"
          src="https://sandbox.secure.checkout.visa.com/wallet-services-web/xo/button.png"
        />
      </div>
    </div>
  );
}

export default Check;
