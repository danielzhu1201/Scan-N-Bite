import React, { Component, useState, useEffect } from "react";

import CheckItem from "../components/CheckItems";
import CheckOutButtion from "../components/CheckoutButton";
import logo from "../logo.svg";
import CheckTotals from "../components/CheckTotals";
import CreditCardButton from "../components/CreditCardButton";
import CashButton from "../components/cashButton";
import firebaseApp from "../config/firebase";

import modules from "../views/styles/CheckBody.module.css";
import { render } from "@testing-library/react";

class Check extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      checkOut: false,
      total: 0.0,
      items: [],
    };
  }

  /*
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
  }*/

  componentDidMount() {
    firebaseApp.auth().onAuthStateChanged((user) => {
      var total = 0.0;
      if (user) {
        const uid = user.uid!;
        const userRef = firebaseApp
          .firestore()
          .collection("users")
          .doc(uid)
          .collection("current_order");
        userRef.get().then((snapshot) => {
          const allItem = Array();
          snapshot.forEach((doc) => {
            const data = doc.data();
            allItem.push(data);
            total = total + parseFloat(data.price) * parseInt(data.qty);
          });
          this.setState({
            total: total,
            items: allItem,
          });
        });
      }
    });
  }

  render() {
    const changeMargin = {
      margin: "0px 0px 50px 0px",
    };
    return (
      <div className={modules.Container}>
        <img src={logo} className={modules.TypeLogo} alt="TypePic" />
        <div className={modules.CheckTitle}> Your Check</div>
        <div className={modules.Check}>
          <div className={modules.OrderedItems} style={changeMargin}>
            {this.state.items.map((item, i) => {
              return (
                <CheckItem
                  key={i}
                  name={item.name}
                  qty={item.qty}
                  price={item.price}
                />
              );
            })}
          </div>
          {/*{checkBalances}
        {paymentOptions}*/}
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
}

export default Check;
