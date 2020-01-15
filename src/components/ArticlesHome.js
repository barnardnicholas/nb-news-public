import React, { Component } from "react";
import ArticlesList from "./ArticlesList";
import * as api from "./api";

class ArticlesHome extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    api.getArticles().then(articles => {
      this.setState({ articles: articles });
    });
  }

  render() {
    const { articles } = this.state;
    const { loggedInUser } = this.props;
    return (
      <div id="articleshome">
        <ArticlesList articles={articles} loggedInUser={loggedInUser} />
      </div>
    );
  }
}

export default ArticlesHome;
