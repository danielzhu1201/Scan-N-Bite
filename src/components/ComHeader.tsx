import React, { Component } from 'react';

import modules from "./styles/ComHeader.module.css"

export default class ComHeader extends Component {
  render() {
    return (
      <header className={modules.TopHeader}>
        <h1 className={modules.TopText}>Menu</h1>
      </header >
    );
  }
}

