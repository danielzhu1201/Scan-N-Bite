import React from "react";
import logo from "../logo.svg";
import { Container } from "@material-ui/core";

import modules from "./styles/CheckBody.module.css";
import CheckItem from "./CheckItems";
import CheckOutButtion from "./CheckoutButton"

export default class CheckBody extends React.Component{
    render(){
        return (
        <div>
            <img src={logo} className= {modules.TypeLogo} alt="TypePic" />
            <div className={modules.check}>
                <h1 className={modules.checkTitle}> Your Check</h1>
                <div className={modules.orderedItems}>
                    <CheckItem/>
                    <CheckItem/>
                    <CheckItem/>
                    <CheckItem/>
                    <CheckItem/>
                    <CheckOutButtion/>
                </div>
            </div>
        </div> 
        );
    }
  }