import React, { useState } from "react";
import Divider from "@material-ui/core/Divider";

import modules from "./styles/CheckTotals.module.css";

interface CheckTotalsProps {
  subTotal: number;
  callBack: (any) => void;
}

const CheckTotals: React.FC<CheckTotalsProps> = ({ subTotal, callBack }) => {
  const [tipTotal, setTipTotal] = useState(0);

  return (
    <div className={modules.SubTotal}>
      <Divider style={{ width: "80%" }} />
      <div className={modules.checkStub}>
        <div className={modules.Totals}>
          <div className={modules.checkTotal}>SubTotal</div>
          <div className={modules.checkAmount} id="subTotal">
            $ {subTotal}
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
              onClick={(e) => {
                setTipTotal(subTotal * 0.15);
                callBack(
                  Number.isNaN(subTotal + tipTotal) ? 0.0 : subTotal + tipTotal
                );
              }}
            >
              15%
            </button>
            <button
              className={modules.button}
              onClick={(e) => {
                setTipTotal(subTotal * 0.2);
                callBack(
                  Number.isNaN(subTotal + tipTotal) ? 0.0 : subTotal + tipTotal
                );
              }}
            >
              20%
            </button>
            <button
              className={modules.button}
              onClick={(e) => {
                setTipTotal(subTotal * 0.25);
                callBack(
                  Number.isNaN(subTotal + tipTotal) ? 0.0 : subTotal + tipTotal
                );
              }}
            >
              25%
            </button>
          </div>
        </div>
        <div className={modules.Totals}>
          <div className={modules.checkTotal}>Total</div>
          <div className={modules.checkAmount}>
            $ {Number.isNaN(subTotal + tipTotal) ? "..." : subTotal + tipTotal}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckTotals;
