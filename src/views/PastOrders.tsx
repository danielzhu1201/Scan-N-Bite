import React, { Component } from "react";
import firebaseApp from "../config/firebase";

import banners from "../config/banner";

import modules from "./styles/PastOrders.module.css";

const db = firebaseApp.firestore();

class PastOrders extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      orders: [],
    };
  }

  componentDidMount() {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        const orderRef = firebaseApp
          .firestore()
          .collection("users")
          .doc(user.uid!)
          .collection("past_orders");
        orderRef.get().then((snapshot) => {
          const items = Array();
          snapshot.forEach((doc) => {
            const data = doc.data();
            items.push(data);
          });
          this.setState({ orders: items });
        });
      }
    });
  }

  render() {
    return (
      <div className={modules.Container}>
        <img
          src={banners.desserts}
          className={modules.TypeLogo}
          alt="TypePic"
        />
        <div className={modules.Title}>Your Past Orders</div>
        {this.state.orders.map((info, i) => {
          return (
            <div className={modules.Item} key={i}>
              <div>
                <div className={modules.Name}>{info.name}</div>
                <div className={modules.Date}>{info.date}</div>
              </div>
              <div className={modules.Price}>{info.total}</div>
            </div>
          );
        })}
        {this.state.orders.length === 0 && (
          <div className={modules.Notification}>
            Come Back Later To See Your Order History
          </div>
        )}
      </div>
    );
  }
}

export default PastOrders;
