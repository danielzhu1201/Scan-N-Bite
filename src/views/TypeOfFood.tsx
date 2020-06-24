import React from 'react'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import logo from "../logo.svg";
import "./TypeOfFood.css";
import ComHeader from "../components/ComHeader"
import ComFooter from "../components/ComFooter"
import ArrowBack from "../components/ArrowBack"
import TypeBody from "../components/TypeBody"

function TypeOfFood() {
  return (
    <div>
      <ComHeader />
      <ArrowBack />
      <TypeBody />
      {/* Not Sure ComFooter Component, Tried to Link to certain pages but they won't work */}
      <ComFooter />
    </div>

  )
}

export default TypeOfFood;
