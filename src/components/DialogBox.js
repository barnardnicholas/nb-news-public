import React from "react";
import WindowBar from "./WindowBar";

const DialogBox = props => {
  const { windowText, msg, okDialog, cancelDialog, closeDialog } = props;

  const handleOK = () => {
    okDialog();
  };

  const handleCancel = () => {
    cancelDialog();
  };

  const handleClose = () => {
    closeDialog();
  };

  return (
    <div id="dialogoverlay">
      <div id="dialogbox">
        <WindowBar windowText={windowText} onClose={handleClose} />
        <div id="dialogcontent">
          <p>{msg}</p>
          <button onClick={handleOK}>OK</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
