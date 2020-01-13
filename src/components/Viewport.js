import React from "react";
import { Router } from "@reach/router";
import ArticlesHome from "./ArticlesHome";
import TopicsHome from "./TopicsHome";
import Home from "./Home";

const Viewport = () => {
  return (
    <div id="viewport">
      <Router>
        <Home path="/" />
        <ArticlesHome path="/articles" />
        <TopicsHome path="/topics" />
      </Router>
    </div>
  );
};

export default Viewport;
