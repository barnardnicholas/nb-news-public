import React, { Component } from "react";
import ArticlesList from "./ArticlesList";
import * as dummyData from "./dummy-data";
import * as api from "./api";

class ArticlesByTopicHome extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    const { slug } = this.props;
    api.getArticlesByTopic(slug).then(articles => {
      this.setState({ articles: articles });
    });
  }
  render() {
    const { articles } = this.state;
    return (
      <div id="articlesbytopichome">
        <ArticlesList articles={articles} />
      </div>
    );
  }
}

export default ArticlesByTopicHome;
