import React from "react";
import "./header.css";
import Logo from "../../static/img/logo.png";
import RefreshIcon from "../../static/img/refresh-icon.png";

const Header = props => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div>
        <a href="/" className="navbar">
          <img src={RefreshIcon} alt="Refresh Icon" className="refresh-icon" />
        </a>
      </div>
    </div>
  );
};

export default Header;
