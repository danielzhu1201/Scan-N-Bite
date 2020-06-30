import React from 'react'

import modules from "./styles/CheckOutButton.module.css"

interface ButtonProps {
  label: string;
}
  

const YellowButton: React.FC<ButtonProps> = ({ label }) => {
  return (
    <div className={modules.wrapper}>
        <button className={modules.button}>{label}</button>
      </div>
  );
};

export default YellowButton;