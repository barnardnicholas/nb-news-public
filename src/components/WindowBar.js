import React from "react";
import xbutton from "../assets/xbutton.png";

const WindowBar = ({ windowText }) => {
  return (
    <div id="windowbar">
      <div id="windowbarcontent">
        <h2 id="windowtext">{windowText}</h2>
      </div>
      <button id="windowbarclosebtn">
        <img src={xbutton} alt="X" width="40px" height="40px" />
      </button>
    </div>
  );
};

export default WindowBar;
