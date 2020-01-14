import React from "react";
import { Link } from "@reach/router";
import * as utils from "./utils";

const ArticleCard = props => {
  const { article } = props;

  return (
    <li className="articlecard">
      <Link to={`${article.article_id}`} className="reactlink">
        <h4>{article.title}</h4>
      </Link>
      <h5>By {article.author}</h5>
      <h5>{article.created_at}</h5>
      <h5>Topic: {article.topic}</h5>
      <p>{utils.truncateText(article.body)}</p>
      <Link to={`/articles/${article.article_id}`} className="reactlink">
        <h5>Read more. . .</h5>
      </Link>
    </li>
  );
};

export default ArticleCard;
