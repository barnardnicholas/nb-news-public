import React, { Component } from "react";
import * as api from "./api";
import VotesBar from "./VotesBar";

class CommentCard extends Component {
  state = {
    author: null,
    body: null,
    votes: null,
    created_at: null,
    comment_id: null,
    isUsersComment: false,
    userHasVoted: false
  };

  handleVote = (comment_id, vote_inc) => {
    const { votes } = this.state;
    this.setState({ votes: votes + 1, userHasVoted: true });
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
      userHasVoted
    } = this.state;
    let { author } = this.state;
    if (author === loggedInUser.username) {
      author = "You";
    }
    return (
      <li id="commentcard">
        <h5>{author}</h5>
        <h5>{created_at}</h5>
        <p>{body}</p>
        <VotesBar
          id={comment_id}
          votes={votes}
          handleVote={this.handleVote}
          userHasVoted={userHasVoted}
        />
        {isUsersComment && this.renderDeleteComment()}
      </li>
    );
  }
}

export default CommentCard;
