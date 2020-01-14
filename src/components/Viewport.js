import React from "react";
import { Router } from "@reach/router";
import ArticlesHome from "./ArticlesHome";
import TopicsHome from "./TopicsHome";
import Home from "./Home";
import About from "./About";
import SingleArticle from "./SingleArticle";

const Viewport = () => {
  return (
    <div id="viewport">
      <Router>
        <Home path="/" />
        <ArticlesHome path="/articles" />
        <TopicsHome path="/topics" />
        <SingleArticle path="/articles/:article_id" />
        <About path="/about" />
      </Router>
    </div>
  );
};

export default Viewport;
