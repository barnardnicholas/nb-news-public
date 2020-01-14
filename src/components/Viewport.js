import React from "react";
import { Router, Redirect } from "@reach/router";
import ArticlesHome from "./ArticlesHome";
import TopicsHome from "./TopicsHome";
import Home from "./Home";
import About from "./About";
import SingleArticle from "./SingleArticle";
import ArticlesByTopicHome from "./ArticlesByTopicHome";
import ErrorPage from "./ErrorPage";

const Viewport = () => {
  return (
    <div id="viewport">
      <Router>
        <Home path="/" />
        <ArticlesHome path="/articles" />
        <TopicsHome path="/topics" />
        <ArticlesByTopicHome path="/topics/:slug/articles" />
        <SingleArticle path="/articles/:article_id" />
        <SingleArticle path="/topics/:slug/articles/:article_id/" />
        <About path="/about" />
        <ErrorPage default />
      </Router>
    </div>
  );
};

export default Viewport;
