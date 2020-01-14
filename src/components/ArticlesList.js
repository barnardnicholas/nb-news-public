import React from "react";
import ArticleCard from "./ArticleCard";

const ArticlesList = props => {
  const { articles } = props;
  return (
    <>
      <div id="articletitle">
        <h3>ARTICLES</h3>
      </div>
      <ul>
        {articles.map(article => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </>
  );
};

export default ArticlesList;
