import React, { useState } from "react";
import Divider from "@material-ui/core/Divider";

import modules from "./styles/CheckTotals.module.css";

export default function CheckTotals() {
  const [checkSubtotal, setCheckSubtotal] = useState(100);
  const [tipTotal, setTipTotal] = useState(0);
  const [checkTotal, setCheckTotal] = useState(checkSubtotal + tipTotal);

  function updateBill() {
    setCheckTotal(checkSubtotal + tipTotal);
    console.log(checkTotal);
  }
  return (
    <div className={modules.SubTotal}>
      <Divider style={{ width: "80%" }} />
      <div className={modules.checkStub}>
        <div className={modules.Totals}>
          <div className={modules.checkTotal}>SubTotal</div>
          <div className={modules.checkAmount} id="subTotal">
            $ {checkSubtotal}
          </div>
        </div>
        <div className={modules.Totals}>
          <div className={modules.checkTotal}>Tip</div>
          <div className={modules.tipInput}>
            ${" "}
            <input
              type="number"
              id="tipBox"
              className={modules.Tip}
              value={tipTotal}
              onChange={(e) => setTipTotal(parseFloat(e.target.value))}
            />
          </div>
        </div>
        <div className={modules.tipButtons}>
          <div className={modules.container}>
            <button
              className={modules.button}
              onClick={(e) => setTipTotal(checkSubtotal * 0.15)}
            >
              15%
            </button>
            <button
              className={modules.button}
              onClick={(e) => setTipTotal(checkSubtotal * 0.2)}
            >
              20%
            </button>
            <button
              className={modules.button}
              onClick={(e) => setTipTotal(checkSubtotal * 0.25)}
            >
              25%
            </button>
          </div>
        </div>
        <div className={modules.Totals}>
          <div className={modules.checkTotal}>Total</div>
          <div className={modules.checkAmount}>
            ${" "}
            {Number.isNaN(checkSubtotal + tipTotal)
              ? "..."
              : checkSubtotal + tipTotal}
          </div>
        </div>
      </div>
    </div>
  );
}
