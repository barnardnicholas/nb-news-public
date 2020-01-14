import React, { Component } from "react";
import { Link } from "@reach/router";
import { topics } from "./dummy-data";
import * as api from "./api";

class TopicCard extends Component {
  state = {
    relatedArticles: 0
  };

  componentDidMount() {
    const { slug } = this.props.topic;
    api.getArticlesByTopic(slug).then(quantity => {
      this.setState({ relatedArticles: quantity });
    });
  }
  render() {
    const { relatedArticles } = this.state;
    const { topic } = this.props;
    const subTitle = `Found ${relatedArticles.length} articles related to this topic...`;
    return (
      <li className="topiccard">
        <Link to={`/topics/${topic.slug}/articles`} className="reactlink">
          <h4>{topic.description}</h4>
          <p>{subTitle}</p>
        </Link>
      </li>
    );
  }
}

export default TopicCard;
