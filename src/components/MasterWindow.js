import React from "react";
import WindowBar from "./WindowBar";
import WindowContent from "./WindowContent";

const MasterWindow = () => {
  return (
    <div id="masterwindow">
      <WindowBar />
      <WindowContent />
    </div>
  );
};

export default MasterWindow;
