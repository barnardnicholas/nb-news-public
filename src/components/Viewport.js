import React from "react";
import { Router } from "@reach/router";
import ArticlesHome from "./ArticlesHome";
import TopicsHome from "./TopicsHome";

const Viewport = () => {
  return (
    <div id="viewport">
      <Router>
        <ArticlesHome path="/api/articles" />
        <TopicsHome path="api/topics" />
      </Router>
    </div>
  );
};

export default Viewport;
