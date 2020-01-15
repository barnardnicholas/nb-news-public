import React, { Component } from "react";
import CommentCard from "./CommentCard";
import * as api from "./api";

class CommentsList extends Component {
  state = {
    comments: []
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

  render() {
    const { comments } = this.state;
    const { loggedInUser } = this.props;
    return (
      <div id="commentslist">
        <h3 id="commentstitle">Comments: ({comments.length})</h3>
        <ul id="commentslistbody">
          {comments.map(comment => {
            return (
              <CommentCard
                key={comment.comment_id}
                comment={comment}
                loggedInUser={loggedInUser}
                deleteComment={this.deleteComment}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CommentsList;
