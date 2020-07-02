import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import Divider from "@material-ui/core/Divider";
import CreditCardButton from "../components/CreditCardButton";
import CashButton from "../components/cashButton";

import modules from "./styles/Pay.module.css";

class Pay extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      paymentSuccess: false,
    };
  }

  render() {
    const info = this.props.location.paymentProps;

    return (
      <React.Fragment>
        {true ? (
          <div className={modules.Container}>
            <div className={modules.Total}>Your total is</div>
            <div className={modules.TotalNum}>{`$${10}`}</div>
            <Divider style={{ width: "80%", margin: "10px 0px" }} />
            <div className={modules.CheckoutText}>
              How would you like to checkout?
            </div>
            <Helmet>
              <script type="text/javascript">{`var amount = ${10};`}</script>
              <script type="text/javascript">{`console.log(amount)`}</script>
              <script
                type="text/javascript"
                src="https://sandbox-assets.secure.checkout.visa.com/checkout-widget/resources/js/integration/v1/sdk.js"
              ></script>
              <script type="text/javascript">
                {`function onVisaCheckoutReady() {
                    V.init({
                    apikey: "PQY61HUOVKXW1E1AITP621_jPkgtZlzt9320UI02Ergl9PF5g",
                    encryptionKey: "W9O4GYP5A4UOXGU2RR4513FZ-EpKghPT6dT1QKiVvNFCzO5Ms",
                    payment: {
                        cardBrands: ["VISA", "MASTERCARD", "AMEX", "DINERS", "DISCOVER"],
                    },
                    paymentRequest: {
                        currencyCode: "USD",
                        subtotal: amount,
                    },
                    dataLevel: "NONE",
                    });
                    V.on("payment.success", function (payment) {
                    localStorage.setItem("status", "Success");
                    
                    });
                    V.on("payment.cancel", function (payment) {
                    localStorage.setItem("status", "Cancel");
                    });
                    V.on("payment.error", function (payment, error) {
                    localStorage.setItem("status", "Fail");
                    });
                }`}
              </script>
            </Helmet>
            <img
              alt="Visa Checkout"
              className="v-button"
              role="button"
              src="https://sandbox.secure.checkout.visa.com/wallet-services-web/xo/button.png"
            />
            <CreditCardButton />
            <CashButton />
            <div>{this.state.paymentSuccess}</div>
          </div>
        ) : (
          <div></div>
        )}
      </React.Fragment>
    );
  }
}

export default withRouter(Pay);
