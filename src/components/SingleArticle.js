import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "./api";
import * as utils from "./utils";
import CommentsList from "./CommentsList";
import VotesBar from "./VotesBar";
import { avatarImages } from "./avatar-lookup";
import ErrorPage from "./ErrorPage";

class SingleArticle extends Component {
  state = {
    title: null,
    body: null,
    votes: null,
    author: null,
    topic: null,
    created_at: null,
    article_id: null,
    userHasVoted: false,
    hasError: false
  };

  componentDidMount() {
    const { article_id, loggedInUser } = this.props;
    const { throwDialog, closeDialog } = this.props;
    api
      .getArticleById(article_id)
      .then(article => {
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
            username,
            hasError: false
          });
        });
      })
      .catch(err => {
        const { status } = err.response;
        const { msg } = err.response.data;

        const okDialog = () => {
          closeDialog();
        };
        const cancelDialog = () => {
          closeDialog();
        };
        const dialogClose = () => {
          closeDialog();
        };
        throwDialog(
          `${status} Error`,
          `${status} - ${msg}`,
          okDialog,
          cancelDialog,
          dialogClose
        );
        this.setState({ hasError: true });
      });
  }

  handleVote = (article_id, vote_inc) => {
    const { votes } = this.state;
    this.setState({ votes: votes + 1, userHasVoted: true });
    api.patchArticleById(article_id, vote_inc);
  };

  renderArticle() {
    const {
      title,
      body,
      votes,
      author,
      topic,
      created_at,
      userHasVoted,
      username
    } = this.state;
    const { article_id, throwDialog, closeDialog } = this.props;
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
        <CommentsList
          article_id={article_id}
          loggedInUser={loggedInUser}
          throwDialog={throwDialog}
          closeDialog={closeDialog}
        />
      </div>
    );
  }

  renderError() {
    return <ErrorPage />;
  }

  render() {
    const { hasError } = this.state;
    return (
      <>
        {hasError && this.renderError()}
        {!hasError && this.renderArticle()}
      </>
    );
  }
}

export default SingleArticle;
