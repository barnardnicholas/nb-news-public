import React from "react";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import { avatarImages } from "./avatar-lookup";

const ArticlesList = props => {
  const { articles, filter, loggedInUser, author } = props;
  const displayFilterText = () => {
    return <h5>{`${articles.length} articles relating to ${filter}:`}</h5>;
  };

  const displayAuthorText = () => {
    return (
      <>
        <img
          src={avatarImages[author]}
          alt={`${author} avatar`}
          height="150"
          width="150"
        />
        <h5>{`${articles.length} articles by ${author}:`}</h5>
      </>
    );
  };

  const displayList = () => {
    return (
      <>
        {filter && displayFilterText()}
        {author && displayAuthorText()}
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

  const displayLoading = () => {
    return <Loading />;
  };

  return (
    <>
      <div id="articletitle">
        <h3>ARTICLES</h3>
      </div>
      {articles.length === 0 ? displayLoading() : displayList()}
    </>
  );
};

export default ArticlesList;
