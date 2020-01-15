import React from "react";
import xbutton from "../assets/xbutton.png";

const WindowBar = ({ windowText }) => {
  return (
    <div id="windowbar">
      <div id="windowbarcontent">
        <h2 id="windowtext">{windowText}</h2>
      </div>
      <div id="windowbarclosebtn">
        <img src={xbutton} alt="X" width="40px" height="40px" />
      </div>
    </div>
  );
};

export default WindowBar;
