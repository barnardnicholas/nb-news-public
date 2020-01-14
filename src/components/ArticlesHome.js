import React, { Component } from "react";
import { Router } from "@reach/router";
import ArticlesList from "./ArticlesList";
import * as api from "./api";

class ArticlesHome extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    api.getAllArticles().then(articles => {
      this.setState({ articles: articles });
    });
  }

  render() {
    const { articles } = this.state;
    return (
      <div id="articleshome">
        <ArticlesList articles={articles} />
      </div>
    );
  }
}

export default ArticlesHome;
