import React, { useState } from "react";
import Divider from "@material-ui/core/Divider";

import modules from "./styles/CheckTotals.module.css";

interface CheckTotalsProps {
  subTotal: number;
  callBack: (any) => void;
}

const CheckTotals: React.FC<CheckTotalsProps> = ({ subTotal, callBack }) => {
  const [tipTotal, setTipTotal] = useState("0");

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
              id="tipBox"
              className={modules.Tip}
              value={tipTotal}
              onChange={(e) => {
                setTipTotal(e.target.value);
                const val = parseFloat(e.target.value);
                if (!Number.isNaN(val)) {
                  callBack(subTotal + val);
                }
              }}
            />
          </div>
        </div>
        <div className={modules.tipButtons}>
          <div className={modules.container}>
            <button
              className={modules.button}
              onClick={(e) => {
                setTipTotal((subTotal * 0.15).toString());
                callBack(subTotal * 1.15);
              }}
            >
              15%
            </button>
            <button
              className={modules.button}
              onClick={(e) => {
                setTipTotal((subTotal * 0.2).toString());
                callBack(subTotal * 1.2);
              }}
            >
              20%
            </button>
            <button
              className={modules.button}
              onClick={(e) => {
                setTipTotal((subTotal * 0.25).toString());
                callBack(subTotal * 1.25);
              }}
            >
              25%
            </button>
          </div>
        </div>
        <div className={modules.Totals}>
          <div className={modules.checkTotal}>Total</div>
          <div className={modules.checkAmount}>
            ${" "}
            {Number.isNaN(parseFloat(tipTotal))
              ? "..."
              : subTotal + parseFloat(tipTotal)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckTotals;
