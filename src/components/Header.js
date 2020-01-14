import React from "react";
import ncNarrowHeader from "../assets/ncnarrowheader.png";

const Header = () => {
  return (
    <div id="header">
      <img id="logo" src={ncNarrowHeader} alt="NC News Logo" />
    </div>
  );
};

export default Header;
