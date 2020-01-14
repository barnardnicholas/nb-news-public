import React, { Component } from "react";
import * as api from "./api";
import * as dummyData from "./dummy-data";
import ArticleCard from "./ArticleCard";

class Home extends Component {
  state = {
    featuredArticle: {}
  };

  componentDidMount() {
    this.getFeaturedArticle();
  }

  getFeaturedArticle() {
    api.getArticles().then(articles => {
      const articlesCopy = [...articles.sort(() => Math.random() - 0.5)];
      this.setState({ featuredArticle: articlesCopy[0] });
    });
  }

  showHomePageHeader() {
    return (
      <>
        <div id="hometitle">
          <h3>NC News Home Page</h3>
        </div>
      </>
    );
  }

  showHomePageBody() {
    return (
      <>
        <p id="homepagebody">
          Welcome to NC News - your all-digital, "paperless" newspaper for the
          modern age. You'll find the system easy to navigate from any standard
          IBM terminal. Use the MOUSE to "click" on menu items.
        </p>
      </>
    );
  }

  showFeaturedArticle() {
    const { featuredArticle } = this.state;
    return (
      <>
        <h3>Featured Article:</h3>
        <ArticleCard article={featuredArticle} />
      </>
    );
  }

  render() {
    const { featuredArticle } = this.state;
    return (
      <div id="home">
        {this.showHomePageHeader()}
        {this.showHomePageBody()}
        {featuredArticle.article_id && this.showFeaturedArticle()}
      </div>
    );
  }
}

export default Home;
