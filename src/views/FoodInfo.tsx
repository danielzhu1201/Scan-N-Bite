import React, { Component, useState } from "react";
import { withRouter } from "react-router-dom";

import FoodInfoDescription from "../components/InfoDescription";
import OrderButton from "../components/OrderButton";
import Headline from "../components/Headline";
import refs from "../config/dbrefs";

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
          console.log(data);
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
            imageURL={this.state.info.picture}
          />
          <div className={modules.FoodInfoDescriptionWrapper}>
            <FoodInfoDescription
              title={"Description"}
              content={this.state.info.description}
            />
          </div>
        </div>
        <div className={modules.FoodInfoOrderButton}>
          <OrderButton price={`$${this.state.info.price}`} />
        </div>
      </div>
    );
  }
}

export default withRouter(FoodInfo);
