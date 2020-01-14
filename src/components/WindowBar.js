import React from "react";
import xbutton from "../assets/xbutton.png";

const WindowBar = () => {
  return (
    <div id="windowbar">
      <div id="windowbarcontent">
        <h2 id="windowtext">NC News v0.1</h2>
      </div>
      <div id="windowbarclosebtn">
        <img src={xbutton} alt="X" width="40px" height="40px" />
      </div>
    </div>
  );
};

export default WindowBar;
