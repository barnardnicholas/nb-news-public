import React from "react";
import ncLogo from "../assets/nclogo.png";

const Header = () => {
  return (
    <div id="header">
      <img id="logo" src={ncLogo} alt="NC News Logo" />
    </div>
  );
};

export default Header;
