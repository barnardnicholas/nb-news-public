import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Main from "./Main";

const WindowContent = () => {
  return (
    <div id="windowcontent">
      <Header />
      <NavBar />
      <Main />
    </div>
  );
};

export default WindowContent;
