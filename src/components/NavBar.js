import React, { Component } from "react";
import { Link } from "@reach/router";

class NavBar extends Component {
  state = {};

  render() {
    return (
      <nav id="navbar">
        <Link to="/" id="homebutton" className="navbutton">
          Home
        </Link>
        <Link to="/articles" id="articlesbutton" className="navbutton">
          Articles
        </Link>
        <Link to="/topics" id="topicsbutton" className="navbutton">
          Topics
        </Link>
        <Link to="/about" id="aboutbutton" className="navbutton">
          About
        </Link>
      </nav>
    );
  }
}

export default NavBar;
