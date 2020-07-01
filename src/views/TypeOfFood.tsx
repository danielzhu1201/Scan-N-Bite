import React, { Component, useEffect, useState } from "react";
import ItemOverview from "../components/ItemOverview";
import { withRouter } from "react-router-dom";
import firebaseApp from "../config/firebase";

import modules from "./styles/TypeOfFood.module.css";
import { render } from "@testing-library/react";

const imgURL = "/Fruits.jpg";
const db = firebaseApp.firestore();

const refs = {
  drinks: db
    .collection("menu")
    .doc("smy7J1V4liwCklUdtncK")
    .collection("category")
    .doc("WAZAfnCeu8q6cbM9vA9L")
    .collection("items"),
  desserts: db
    .collection("menu")
    .doc("smy7J1V4liwCklUdtncK")
    .collection("category")
    .doc("Yjk8qVTRIrfYCKL2YP7O")
    .collection("items"),
  sides: db
    .collection("menu")
    .doc("smy7J1V4liwCklUdtncK")
    .collection("category")
    .doc("ZMhZzktzxR7YphkEd1sG")
    .collection("items"),
  appetizers: db
    .collection("menu")
    .doc("smy7J1V4liwCklUdtncK")
    .collection("category")
    .doc("eJJ7b01T6W3MD5OLdzLI")
    .collection("items"),
  entrees: db
    .collection("menu")
    .doc("smy7J1V4liwCklUdtncK")
    .collection("category")
    .doc("lip1YumvzOTqcuHofR90")
    .collection("items"),
};

class TypeOfFood extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      dishes: [],
    };
  }

  componentDidMount() {
    const type = this.props.match.params.type;
    const ref = refs[type];
    if (ref) {
      ref.get().then((snapshot) => {
        const dishes = Array();
        snapshot.forEach((doc) => {
          const data = doc.data();
          console.log(data);
          dishes.push(data);
        });
        this.setState({ dishes: dishes });
      });
    }
  }

  render() {
    return (
      <div className={modules.Container}>
        <img
          className={modules.Banner}
          src={process.env.PUBLIC_URL + imgURL}
          alt={"Item Pic here"}
        />
        <div
          className={modules.TitleText}
        >{`Select Your Favourite Dishes`}</div>
        <div className={modules.ItemContainer}>
          {this.state.dishes.length == 0 && (
            <ItemOverview
              itemName="Item name here!"
              desc="Description goes here. If too long If too long If toong If toong If toong If toong If toong If too long, truncatruncatrunca...."
              price="$100.00"
              cal="150 Cal."
              imageURL="/food.jpg"
            />
          )}
          {this.state.dishes &&
            this.state.dishes.map((info, i) => {
              return (
                <ItemOverview
                  itemName={info.name}
                  desc={info.desc}
                  price={`$${info.price}`}
                  cal={`${info.calories} Cal.`}
                  imageURL="/food.jpg"
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default withRouter(TypeOfFood);
