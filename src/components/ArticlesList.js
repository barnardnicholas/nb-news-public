import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import uparrow from "../assets/uparrow.png";

class ArticlesList extends Component {
  render() {
    return (
      <ul>
        <li class="articlecard">
          <h4>The standard Lorem Ipsum passage, used since the 1500s</h4>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </li>
        <img src={uparrow} alt="up arrow" height="60" width="60" />
      </ul>
    );
  }
}

export default ArticlesList;
