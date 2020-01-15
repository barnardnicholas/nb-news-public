import React from "react";
import VotesBar from "./VotesBar";

const CommentCard = ({ comment, loggedInUser }) => {
  const { author, body, votes, created_at, comment_id } = comment;

  const handleVote = () => {
    console.log(`comment ${comment_id} voted by ${loggedInUser}`);
  };

  return (
    <li id="commentcard">
      <h5>{author}</h5>
      <h5>{created_at}</h5>
      <p>{body}</p>
      <VotesBar type="comment" data={comment} handleClick={handleVote} />
    </li>
  );
};

export default CommentCard;
