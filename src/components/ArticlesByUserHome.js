import React, { Component } from "react";
import ArticlesList from "./ArticlesList";
import * as api from "../utils/api";

class ArticlesByUserHome extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    const { username } = this.props;
    api.getArticles(null, username).then(articles => {
      this.setState({ articles: articles });
    });
  }
  render() {
    const { articles } = this.state;
    const { loggedInUser, username } = this.props;
    return (
      <div id="articlesbytopichome">
        <ArticlesList
          articles={articles}
          author={username}
          loggedInUser={loggedInUser}
        />
      </div>
    );
  }
}

export default ArticlesByUserHome;
