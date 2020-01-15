import React, { Component } from "react";
import ArticlesList from "./ArticlesList";
import * as api from "./api";

class ArticlesByTopicHome extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    const { slug } = this.props;
    api.getArticles(slug).then(articles => {
      this.setState({ articles: articles });
    });
  }
  render() {
    const { articles } = this.state;
    const { slug, loggedInUser } = this.props;
    return (
      <div id="articlesbytopichome">
        <ArticlesList
          articles={articles}
          filter={slug}
          loggedInUser={loggedInUser}
        />
      </div>
    );
  }
}

export default ArticlesByTopicHome;
