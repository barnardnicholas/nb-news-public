import React, { Component } from "react";
import { Router } from "@reach/router";
import Overlay from "./components/Overlay";
import WindowBar from "./components/WindowBar";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import ArticlesHome from "./components/ArticlesHome";
import TopicsHome from "./components/TopicsHome";
import Home from "./components/Home";
import About from "./components/About";
import SingleArticle from "./components/SingleArticle";
import ArticlesByTopicHome from "./components/ArticlesByTopicHome";
import ErrorPage from "./components/ErrorPage";
import "./App.css";
import Options from "./components/Options";

class App extends Component {
  state = {
    windowText: "NC News v0.1",
    isLoading: false,
    isClosed: false,
    loggedInUser: {
      username: "weegembump",
      avatar_url:
        "https://www.upandrunning.co.uk/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/m/r/mr-bump.jpg",
      name: "Gemma Bump"
    }
  };

  switchUser = () => {
    console.log("switchuser");
  };

  renderMasterWindow() {
    const { loggedInUser, windowText } = this.state;
    return (
      <div id="masterwindow">
        <WindowBar windowText={windowText} />
        <div id="windowcontent">
          <Header />
          <NavBar loggedInUser={loggedInUser} />
          <div id="main">
            <SideBar />
            <div id="viewport">
              <Router>
                <Home path="/" loggedInUser={loggedInUser} />
                <ArticlesHome path="/articles" loggedInUser={loggedInUser} />
                <TopicsHome path="/topics" loggedInUser={loggedInUser} />
                <ArticlesByTopicHome
                  path="/topics/:slug/articles"
                  loggedInUser={loggedInUser}
                />
                <SingleArticle
                  path="/articles/:article_id"
                  loggedInUser={loggedInUser}
                />
                <SingleArticle
                  path="/topics/:slug/articles/:article_id/"
                  loggedInUser={loggedInUser}
                />
                <About path="/about" />
                <Options path="/options" />
                <ErrorPage default />
              </Router>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderLoading() {
    return <p>Loading...</p>;
  }

  render() {
    const { isLoading, loggedInUser } = this.state;
    return (
      <div className="App">
        {/* <Overlay /> */}
        {isLoading ? this.renderLoading() : this.renderMasterWindow()}
      </div>
    );
  }
}

export default App;
