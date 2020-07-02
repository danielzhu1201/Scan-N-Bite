import React from "react";
import { Link } from "react-router-dom";
import modules from "./styles/CheckOutButton.module.css";

interface CheckOutButtonProps {
  amount: number;
}

export default function CheckoutButton<CheckOutButton>({ amount }) {
  return (
    <div className={modules.Container}>
      <Link
        to={{
          pathname: "/pay",
          paymentProps: {
            amount: amount,
          },
        }}
        style={{ textDecoration: "none" }}
      >
        <button className={modules.button}>Check Out</button>
      </Link>
    </div>
  );
}
