import React from "react";
import { withRouter } from "react-router-dom";

import modules from "./styles/Pay.module.css";

class Pay extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    const info = this.props.location.paymentProps;
    console.log(info);
    return (
      <div className={modules.Container}>
        {info ? <div>{`My payment info is ${info.amount}`}</div> : <div></div>}
      </div>
    );
  }
}

export default withRouter(Pay);
