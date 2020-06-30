import React from "react";

import modules from "./styles/CheckTotals.module.css";
import { Button } from "@material-ui/core";

export default function CheckTotals() {
    const checkTotal = "$ 1242.2"
    const checkSubtotal = "$ 1000.2"
    const checkTip = "$ ______"
  return (
      <div className={modules.checkStub}>
        <div className={modules.Totals}>
            <div className={modules.checkTotal}>SubTotal</div>
            <div className={modules.checkAmount}>{checkSubtotal}</div>
        </div> 
        <div className={modules.Totals}>
            <div className={modules.checkTotal}>Tip</div>
            <div className={modules.checkAmount}>{checkTip}</div>
        </div>
        <div className={modules.tipButtons}>
            <div className={modules.container}>
                <button className={modules.button}>15%</button>
            </div>
            <div className={modules.container}>
                <button className={modules.button}>20%</button>
            </div>
            <div className={modules.container}>
                <button className={modules.button}>25%</button>
            </div>
        </div> 
        <div className={modules.Totals}>
            <div className={modules.checkTotal}>Total</div>
            <div className={modules.checkAmount}>{checkTotal}</div>
        </div>
    </div>
  );
}
