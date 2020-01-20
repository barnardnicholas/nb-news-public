import React, { Component } from "react";
import CommentCard from "./CommentCard";
import * as api from "../utils/api";

class CommentsList extends Component {
  state = {
    comments: [],
    commentInput: ""
  };

  componentDidMount() {
    const { article_id } = this.props;
    api.getCommentsByArticleId(article_id).then(comments => {
      this.setState({ comments: comments });
    });
  }

  deleteComment = comment_id => {
    const { article_id } = this.props;
    api.deleteComment(comment_id).then(response => {
      api.getCommentsByArticleId(article_id).then(comments => {
        this.setState({ comments: comments });
      });
    });
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ commentInput: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { article_id, loggedInUser, throwDialog, closeDialog } = this.props;
    const { commentInput } = this.state;
    const requestBody = { username: loggedInUser.username, body: commentInput };
    if (!commentInput) {
      const windowText = "400 Error";
      const errorMsg = "You must type a comment to post!";
      const okDialog = () => closeDialog();
      const cancelDialog = () => closeDialog();
      const dialogClose = () => closeDialog();
      throwDialog(windowText, errorMsg, okDialog, cancelDialog, dialogClose);
    } else {
      api.postComment(article_id, requestBody).then(comment => {
        this.setState(currentState => {
          return {
            comments: [comment, ...currentState.comments],
            commentInput: ""
          };
        });
      });
    }
  };

  render() {
    const { comments, commentInput } = this.state;
    const { loggedInUser, throwDialog, closeDialog } = this.props;
    return (
      <div id="commentslist">
        <h3 id="commentstitle">Comments: ({comments.length})</h3>
        <ul id="commentslistbody">
          <form id="commentcard" onSubmit={this.handleSubmit}>
            <label>
              Post a comment:
              <br />
              <textarea
                rows="5"
                cols="60"
                placeholder="Enter comment..."
                className="commenttextinput"
                value={commentInput}
                onChange={this.handleChange}
              ></textarea>
            </label>
            <br />
            <button id="submitcommentbutton">
              <h5 id="buttontext">Submit Comment</h5>
            </button>
          </form>
          {comments.map(comment => {
            return (
              <CommentCard
                key={comment.comment_id}
                comment={comment}
                loggedInUser={loggedInUser}
                deleteComment={this.deleteComment}
                throwDialog={throwDialog}
                closeDialog={closeDialog}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CommentsList;
