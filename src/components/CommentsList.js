import React, { Component } from "react";
import CommentCard from "./CommentCard";
import * as dummyData from "./dummy-data";

class CommentsList extends Component {
  state = {
    comments: dummyData.commentsByArticle
  };

  render() {
    const { comments } = this.state;
    return (
      <div id="commentslist">
        <h3 id="commentstitle">Comments: ({comments.length})</h3>
        <ul id="commentslistbody">
          {comments.map(comment => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </ul>
      </div>
    );
  }
}

export default CommentsList;
