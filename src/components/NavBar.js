import React, { Component } from "react";
import { Link } from "@reach/router";
import smallAvatar from "../assets/smallavatar.png";

class NavBar extends Component {
  state = {};

  render() {
    const { username } = this.props.loggedInUser;
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
        <Link to="/options" id="optionsbutton" className="navbutton">
          Options
        </Link>
        <Link to={`/users/${username}/articles`} className="navuserbutton">
          {username}
          <img id="navuseravatar" src={smallAvatar} alt={username} />
        </Link>
      </nav>
    );
  }
}

export default NavBar;
