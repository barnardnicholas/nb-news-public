import React from "react";
import ArticleCard from "./ArticleCard";

const ArticlesList = props => {
  const { articles, filter, loggedInUser } = props;

  const displayFilterText = () => {
    return <h5>{`${articles.length} articles relating to ${filter}:`}</h5>;
  };
  return (
    <>
      <div id="articletitle">
        <h3>ARTICLES</h3>
      </div>
      {filter && displayFilterText()}
      <ul>
        {articles.map(article => {
          return (
            <ArticleCard
              key={article.article_id}
              article={article}
              loggedInUser={loggedInUser}
            />
          );
        })}
      </ul>
    </>
  );
};

export default ArticlesList;
