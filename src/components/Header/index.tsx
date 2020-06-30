import React, {useState} from "react";

import './style.css'

const Header: React.FC = () => {
  const [title, setTitle] = useState('Menu');
  return (
    <header className="header">
      <div className="header__title">{title}</div>
    </header>
  )
}

export default Header;
