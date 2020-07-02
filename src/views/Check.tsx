import React, { Component, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import CheckItem from "../components/CheckItems";
import CheckOutButtion from "../components/CheckoutButton";
import logo from "../logo.svg";
import CheckTotals from "../components/CheckTotals";
import CreditCardButton from "../components/CreditCardButton";
import CashButton from "../components/cashButton";
import firebaseApp from "../config/firebase";

import modules from "../views/styles/CheckBody.module.css";
import { render } from "@testing-library/react";
import CheckoutButton from "../components/CheckoutButton";
import banners from "../config/banner";

class Check extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      checkOut: false,
      subtotal: 0.0,
      total: 0.0,
      items: [],
    };
  }

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
            subtotal: total,
            total: total,
            items: allItem,
          });
          const orderRef = firebaseApp
            .firestore()
            .collection("users")
            .doc(uid)
            .update({});
        });
      }
    });
  }

  render() {
    return (
      <div className={modules.Container}>
        <img src={banners.entrees} className={modules.TypeLogo} alt="TypePic" />
        {this.state.subtotal > 0 ? (
          <div className={modules.CheckTitle}>Your Check</div>
        ) : (
          <div className={modules.NoItem}>
            {`Your Items Will Appear As You Order!`}
          </div>
        )}
        <div className={modules.Check}>
          <div className={modules.OrderedItems}>
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
        </div>
        {this.state.subtotal > 0 && (
          <CheckTotals
            subTotal={this.state.subtotal}
            callBack={(val) => this.setState({ total: val })}
          />
        )}
        {this.state.subtotal > 0 && (
          <NavLink
            to={{
              pathname: "/pay",
              paymentProps: {
                amount: this.state.total,
              },
            }}
            onClick={() => {
              firebaseApp.auth().onAuthStateChanged((user) => {
                if (user) {
                  const uid = user.uid!;
                  const orderRef = firebaseApp
                    .firestore()
                    .collection("users")
                    .doc(uid)
                    .update({
                      total: this.state.total,
                    });
                }
              });
            }}
            style={{ textDecoration: "none" }}
          >
            <button className={modules.Button}>Check Out</button>
          </NavLink>
        )}
      </div>
    );
  }
}

export default Check;
