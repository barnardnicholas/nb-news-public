import React, { Component } from "react";
import * as api from "./api";
import CommentsList from "./CommentsList";

class SingleArticle extends Component {
  state = {
    article: {}
  };

  componentDidMount() {
    const { article_id } = this.props;
    api.getArticleById(article_id).then(article => {
      this.setState({ article: article });
    });
  }

  render() {
    const {
      title,
      body,
      votes,
      author,
      topic,
      created_at
    } = this.state.article;
    return (
      <div id="singlearticle">
        <div id="singlearticletitle">
          <h3>{title}</h3>
        </div>
        <div id="articlesubtitle">
          <h5>By {author}</h5>
          <h5>{created_at}</h5>
          <h5>Topic: {topic}</h5>
        </div>
        <p id="singlearticlebody">{body}</p>
        <div id="singlearticlefooter">
          <h5>Votes: {votes}</h5>
        </div>
        <CommentsList />
      </div>
    );
  }
}

export default SingleArticle;
