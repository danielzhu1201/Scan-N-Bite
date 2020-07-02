import React, { useState } from "react";

import modules from "./styles/ComHeader.module.css";

export default function ComHeader() {
  const title = "Eastside Restaurant";
  return (
    <header className={modules.Header}>
      <div className={modules.HeaderTitle}>{title}</div>
    </header>
  );
}
