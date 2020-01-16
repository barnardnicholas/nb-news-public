import React from "react";
import xbutton from "../assets/xbutton.png";

const WindowBar = ({ windowText, onClose }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <div id="windowbar">
      <div id="windowbarcontent">
        <h2 id="windowtext">{windowText}</h2>
      </div>
      <button id="windowbarclosebtn" onClick={handleClose}>
        {/* <img src={xbutton} alt="X" width="40px" height="40px" /> */}X
      </button>
    </div>
  );
};

export default WindowBar;
