import React, { Component } from "react";
import firebaseApp from "../config/firebase";
import FoodCategory from "../components/FoodCategory";
import Headline from "../components/Headline";
import { NavLink } from "react-router-dom";
import modules from "./styles/Category.module.css";

const db = firebaseApp.firestore();

class CategoryPage extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: String,
      categories: [],
      dishes: [],
    };
  }

  componentDidMount() {
    // get reference for main doc
    const menuRef = db.collection("menu").doc("smy7J1V4liwCklUdtncK");

    menuRef
      .get()
      .then((doc) => {
        const data = doc.data();
        if (data) {
          this.setState({ name: data["name"] });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    menuRef
      .collection("category")
      .get()
      .then((snapshot) => {
        const categories = Array();
        snapshot.forEach((doc) => {
          const data = doc.data();
          categories.push(data);
        });
        this.setState({ categories: categories });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className={modules.Container}>
        <Headline title={this.state.name} imageURL="/Fruits.jpg" />
        <div className={modules.FoodCategory}>
          {this.state.categories &&
            this.state.categories.map((category, i) => {
              return (
                <NavLink
                  style={{ textDecoration: "none" }}
                  to={`/category/${category.name.toLowerCase()}`}
                  key={i}
                >
                  <FoodCategory
                    category={category.name}
                    desc={category.description
                      .split(" ")
                      .splice(0, 15)
                      .join(" ")}
                    img={category.img}
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

export default CategoryPage;
