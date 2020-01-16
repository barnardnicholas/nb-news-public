import React, { Component } from "react";
import * as api from "./api";
import ArticleCard from "./ArticleCard";
import ncNarrowHeader from "../assets/ncnarrowheader.png";

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
        <img id="logo" src={ncNarrowHeader} alt="NC News Logo" />
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
    const { loggedInUser } = this.props;
    return (
      <div id="featuredarticle">
        <h3>Featured Article:</h3>
        <ArticleCard article={featuredArticle} loggedInUser={loggedInUser} />
      </div>
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
