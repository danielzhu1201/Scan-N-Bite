import React, { Component, useEffect, useState } from "react";
import ItemOverview from "../components/ItemOverview";
import { withRouter } from "react-router-dom";
import firebaseApp from "../config/firebase";
import { NavLink } from "react-router-dom";
import modules from "./styles/TypeOfFood.module.css";
import { render } from "@testing-library/react";
import refs from "../config/dbrefs";

const imgURL = "/Fruits.jpg";

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
          const id = doc.id;
          var data = doc.data();
          data["id"] = id;
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
        <div className={modules.TitleText}>{`Select Your ${
          this.props.match.params.type.charAt(0).toUpperCase() +
          this.props.match.params.type.slice(1)
        }`}</div>
        <div className={modules.ItemContainer}>
          {this.state.dishes.length == 0 && (
            <ItemOverview
              itemName="Item name here!"
              desc="Description goes here. If too long If too long If toong If toong If toong If toong If toong If too long, truncatruncatrunca...."
              price="$100.00"
              cal="150 Cal."
              imageURL={`${process.env.PUBLIC_URL}/food.jpg`}
            />
          )}
          {this.state.dishes &&
            this.state.dishes.map((info, i) => {
              return (
                <NavLink
                  style={{ textDecoration: "none" }}
                  key={i}
                  to={`/food/${this.props.match.params.type}/${info.id}`}
                >
                  <ItemOverview
                    itemName={info.name}
                    desc={`${
                      info.description?.slice(0, 40) ||
                      "More descriptions to come"
                    }...`}
                    price={`$${info.price}`}
                    cal={`${info.calories} Cal.`}
                    imageURL={`${process.env.PUBLIC_URL}/food.jpg`}
                    key={i}
                  />
                </NavLink>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withRouter(TypeOfFood);
