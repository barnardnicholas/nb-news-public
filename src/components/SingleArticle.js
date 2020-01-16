import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "./api";
import * as utils from "./utils";
import CommentsList from "./CommentsList";
import VotesBar from "./VotesBar";
import { avatarImages } from "./avatar-lookup";

class SingleArticle extends Component {
  state = {
    title: null,
    body: null,
    votes: null,
    author: null,
    topic: null,
    created_at: null,
    article_id: null,
    userHasVoted: false
  };

  componentDidMount() {
    const { article_id, loggedInUser } = this.props;

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
      return api.getUserByUserName(author).then(user => {
        const { username, avatar_url } = user;
        let { name } = user;
        if (username === loggedInUser.username) {
          name = "You";
        }
        this.setState({
          title,
          body,
          votes,
          topic,
          created_at,
          article_id,
          author: name,
          avatar_url,
          username
        });
      });
    });
  }

  handleVote = (article_id, vote_inc) => {
    const { votes } = this.state;
    this.setState({ votes: votes + 1, userHasVoted: true });
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
      userHasVoted,
      username,
      avatar_url
    } = this.state;
    const { article_id } = this.props;
    const { loggedInUser } = this.props;
    return (
      <div id="singlearticle">
        <div id="singlearticletitle">
          <h3>{title}</h3>
        </div>
        <div id="articlesubtitle">
          <img
            src={avatarImages[username]}
            alt={`${username} avatar`}
            height="150"
            width="150"
          />
          <Link to={`/users/${username}/articles`} className="reactlink">
            <h5>By {author}</h5>
          </Link>
          <h5>{utils.formatDate(created_at)}</h5>
          <Link to={`/topics/${topic}/articles`} className="reactlink">
            <h5>Topic: {topic}</h5>
          </Link>
        </div>
        <p id="singlearticlebody">{body}</p>
        <VotesBar
          id={article_id}
          votes={votes}
          handleVote={this.handleVote}
          userHasVoted={userHasVoted}
        />
        <CommentsList article_id={article_id} loggedInUser={loggedInUser} />
      </div>
    );
  }
}

export default SingleArticle;
