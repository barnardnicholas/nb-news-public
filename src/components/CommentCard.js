import React, { Component } from "react";
import * as api from "./api";
import VotesBar from "./VotesBar";
import * as utils from "./utils";

class CommentCard extends Component {
  state = {
    author: null,
    body: null,
    votes: null,
    created_at: null,
    comment_id: null,
    isUsersComment: false,
    userVotes: 0
  };

  handleVote = (comment_id, vote_inc) => {
    const { votes, userVotes } = this.state;
    const newVotes = votes + vote_inc;
    const newUserVotes = userVotes + vote_inc;
    this.setState({ votes: newVotes, userVotes: newUserVotes });
    api.patchCommentById(comment_id, vote_inc);
  };

  handleDelete = () => {
    const { deleteComment } = this.props;
    const { comment_id } = this.state;
    deleteComment(comment_id);
  };

  renderDeleteComment = () => {
    return (
      <button onClick={this.handleDelete}>
        <h5 id="buttontext">Delete this comment</h5>
      </button>
    );
  };

  componentDidMount() {
    const { author, body, votes, created_at, comment_id } = this.props.comment;
    const { username } = this.props.loggedInUser;
    let isUsersComment = false;
    if (username === author) {
      isUsersComment = true;
    }
    this.setState({
      author,
      body,
      votes,
      created_at,
      comment_id,
      isUsersComment
    });
  }

  render() {
    const { loggedInUser } = this.props;
    const {
      body,
      votes,
      created_at,
      comment_id,
      isUsersComment,
      userVotes
    } = this.state;
    let { author } = this.state;
    if (author === loggedInUser.username) {
      author = "You";
    }
    return (
      <li id="commentcard">
        <h5>{author}</h5>
        <h5>{utils.formatDate(created_at)}</h5>
        <p>{body}</p>
        <VotesBar
          id={comment_id}
          votes={votes}
          handleVote={this.handleVote}
          userVotes={userVotes}
        />
        {isUsersComment && this.renderDeleteComment()}
      </li>
    );
  }
}

export default CommentCard;
