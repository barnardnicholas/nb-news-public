import React from "react";

const CommentCard = props => {
  const { author, body, votes, created_at } = props.comment;
  return (
    <li id="commentcard">
      <h5>{author}</h5>
      <h5>{created_at}</h5>
      <p>{body}</p>
      <div id="commentfooter">
        <h5>Votes: {votes}</h5>
      </div>
    </li>
  );
};

export default CommentCard;
