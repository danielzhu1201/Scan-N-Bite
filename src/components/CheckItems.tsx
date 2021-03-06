import React from "react";

import modules from "./styles/CheckItems.module.css";

interface CheckItemProps {
  name: string;
  qty: number;
  price: number;
}

const CheckItem: React.FC<CheckItemProps> = ({ name, qty, price }) => {
  return (
    <div className={modules.Item}>
      <div>
        <div className={modules.ItemName}>
          {name}
          <span className={modules.ItemQuant}>x{qty} </span>
        </div>
      </div>
      <div>
        <div className={modules.ItemPrice}>{`$${qty * price}`}</div>
      </div>
    </div>
  );
};

export default CheckItem;
