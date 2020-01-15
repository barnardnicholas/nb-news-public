import React, { Component } from "react";
import * as api from "./api";
import CommentsList from "./CommentsList";
import VotesBar from "./VotesBar";

class SingleArticle extends Component {
  state = {
    title: null,
    body: null,
    votes: null,
    author: null,
    topic: null,
    created_at: null,
    article_id: null
  };

  componentDidMount() {
    const { article_id } = this.props;
    api.getArticleById(article_id).then(article => {
      const {
        title,
        body,
        votes,
        author,
        topic,
        created_at,
        article_id
      } = article;
      this.setState({
        title,
        body,
        votes,
        author,
        topic,
        created_at,
        article_id
      });
    });
  }

  handleVote = (article_id, vote_inc) => {
    const { votes } = this.state;
    this.setState({ votes: votes + 1 });
    api.patchArticleById(article_id, vote_inc);
  };

  render() {
    const {
      title,
      body,
      votes,
      author,
      topic,
      created_at,
      article_id
    } = this.state;
    const { loggedInUser } = this.props;
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
        <VotesBar
          type="article"
          id={article_id}
          votes={votes}
          handleVote={this.handleVote}
        />
        <CommentsList />
      </div>
    );
  }
}

export default SingleArticle;
