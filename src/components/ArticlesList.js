import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import { avatarImages } from "../utils/avatar-lookup";

class ArticlesList extends Component {
  state = {
    sortBy: "created_at"
  };

  displayLoading = () => {
    return <Loading />;
  };

  displayList = () => {
    const { articles, filter, loggedInUser, author } = this.props;
    const { sortBy } = this.state;
    articles.sort((a, b) =>
      a[sortBy] > b[sortBy] ? 1 : b[sortBy] > a[sortBy] ? -1 : 0
    );
    return (
      <>
        {filter && this.displayFilterText()}
        {author && this.displayAuthorText()}
        <ul>
          <li className="articlecard">
            Sort articles by:
            <div className="sortbuttons">
              <button
                id="sortbutton"
                className={
                  sortBy === "created_at" ? "latchedbutton" : "unlatchedbutton"
                }
                value="created_at"
                onClick={this.handleSortByDate}
              >
                Date posted
              </button>
              <button
                id="sortbutton"
                className={
                  sortBy === "comment_count"
                    ? "latchedbutton"
                    : "unlatchedbutton"
                }
                onClick={this.handleSortByComments}
              >
                No. of comments
              </button>
              <button
                id="sortbutton"
                className={
                  sortBy === "votes" ? "latchedbutton" : "unlatchedbutton"
                }
                onClick={this.handleSortByVotes}
              >
                No. of votes
              </button>
            </div>
          </li>
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

  handleSortByDate = event => {
    this.setState({ sortBy: "created_at" });
  };

  handleSortByComments = event => {
    this.setState({ sortBy: "comment_count" });
  };

  handleSortByVotes = event => {
    this.setState({ sortBy: "votes" });
  };

  displayFilterText = () => {
    const { articles, filter } = this.props;
    return <h5>{`${articles.length} articles relating to ${filter}:`}</h5>;
  };

  displayAuthorText = () => {
    const { articles, author } = this.props;
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

  render() {
    const { articles } = this.props;
    return (
      <>
        <div id="articletitle">
          <h3>Articles</h3>
        </div>
        {articles.length === 0 ? this.displayLoading() : this.displayList()}
      </>
    );
  }
}

export default ArticlesList;
