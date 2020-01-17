import React from "react";
import { Link } from "@reach/router";
import * as utils from "./utils";

const ArticleCard = props => {
  const { loggedInUser } = props;
  const {
    title,
    created_at,
    body,
    topic,
    article_id,
    author,
    votes,
    comment_count
  } = props.article;
  let accreditedAuthor = props.article.author;
  if (author === loggedInUser.username) {
    accreditedAuthor = "You";
  }
  return (
    <li className="articlecard">
      <Link to={`/articles/${article_id}`} className="reactlink">
        <h4>{title}</h4>
      </Link>
      <Link to={`/users/${author}/articles`} className="reactlink">
        <h5>By {accreditedAuthor}</h5>
      </Link>
      <h5>{utils.formatDate(created_at)}</h5>
      <Link to={`/topics/${topic}/articles`} className="reactlink">
        <h5>Topic: {topic}</h5>
      </Link>
      <h5>{`Votes: ${votes}   Comments: ${comment_count}`}</h5>
      <p>{utils.truncateText(body)}</p>
      <Link to={`/articles/${article_id}`} className="reactlink">
        <h5>Read more. . .</h5>
      </Link>
    </li>
  );
};

export default ArticleCard;
