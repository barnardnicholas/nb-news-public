import React from "react";
import Overlay from "./components/Overlay";
import WindowBar from "./components/WindowBar";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Viewport from "./components/Viewport";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Overlay />
      <div id="masterwindow">
        <WindowBar />
        <div id="windowcontent">
          <Header />
          <NavBar />
          <div id="main">
            <SideBar />
            <Viewport />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
