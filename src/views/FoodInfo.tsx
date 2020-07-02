import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import FoodInfoDescription from "../components/InfoDescription";
import OrderButton from "../components/OrderButton";
import Headline from "../components/Headline";
import refs from "../config/dbrefs";
import { ToastsStore } from "react-toasts";
import firebaseApp from "../config/firebase";

import modules from "./styles/FoodInfo.module.css";
class FoodInfo extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      info: {
        name: "Food Name",
        picture: `${process.env.PUBLIC_URL}/Fruits.jpg`,
        description: "Description of the item go here",
        price: "5.75",
      },
    };
  }

  componentDidMount() {
    const type = this.props.match.params.type;
    const id = this.props.match.params.id;
    const ref = refs[type];
    ref
      .doc(id)
      .get()
      .then((doc) => {
        const data = doc.data();
        if (data) {
          this.setState({ info: data });
        }
      });
  }

  render() {
    return (
      <div className={modules.Container}>
        <div className={modules.FoodInfoHeadline}>
          {/* TODO: need add ArrowBack into headline, and use a props/redux to indicate showing arrowback or not */}
          <Headline
            title={this.state.info.name}
            imageURL={this.state.info.img}
          />
          <div className={modules.FoodInfoDescriptionWrapper}>
            <FoodInfoDescription
              title={"Description"}
              content={this.state.info.description}
            />
            <FoodInfoDescription
              title={"Ingredients"}
              content={this.state.info.ingredients}
            />
            <FoodInfoDescription
              title={"Calories"}
              content={`${this.state.info.calories} Cal.`}
            />
          </div>
        </div>
        <div className={modules.FoodInfoOrderButton}>
          <OrderButton
            price={`$${this.state.info.price}`}
            onClick={() => {
              firebaseApp.auth().onAuthStateChanged((user) => {
                if (user) {
                  const uid = user.uid!;
                  const userRef = firebaseApp
                    .firestore()
                    .collection("users")
                    .doc(uid)
                    .collection("current_order")
                    .doc(this.props.match.params.id);
                  userRef.get().then((snapshot) => {
                    if (!snapshot.exists) {
                      userRef
                        .set({
                          name: this.state.info.name,
                          price: this.state.info.price,
                          qty: 1,
                        })
                        .then((res) => {
                          ToastsStore.success("Added to cart");
                        })
                        .catch((err) => {
                          ToastsStore.error("Try again");
                        });
                    } else {
                      const original_qty = snapshot.get("qty");
                      userRef
                        .update({
                          qty: parseInt(original_qty) + 1,
                        })
                        .then((res) => {
                          ToastsStore.success("Added to cart");
                        })
                        .catch((err) => {
                          ToastsStore.error("Try again");
                        });
                    }
                  });
                } else {
                  ToastsStore.error("You must login to place an order");
                }
              });
            }}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(FoodInfo);
