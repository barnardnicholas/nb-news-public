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
import ArticlesByUserHome from "./components/ArticlesByUserHome";
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
    },
    d_hue: 0,
    d_saturation: 100,
    d_brightness: 100
  };

  switchUser = () => {
    console.log("switchuser");
  };

  changeHue = value => {
    console.log("app hue");
    this.setState({ d_hue: value });
  };

  changeSaturation = value => {
    console.log("app hue");
    this.setState({ d_saturation: value });
  };

  changeBrightness = value => {
    console.log("app hue");
    this.setState({ d_brightness: value });
  };

  renderMasterWindow() {
    const { loggedInUser, windowText } = this.state;
    const { d_hue, d_saturation, d_brightness } = this.state;
    const masterStyling = {
      filter: `blur(0.75px) hue-rotate(${d_hue}deg) grayscale(${100 -
        d_saturation}%) brightness(${d_brightness}%)`
    };
    return (
      <div id="masterwindow" style={masterStyling}>
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
                <ArticlesByUserHome
                  path="/users/:username/articles"
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
                <Options
                  path="/options"
                  changeHue={this.changeHue}
                  changeSaturation={this.changeSaturation}
                  changeBrightness={this.changeBrightness}
                  d_hue={d_hue}
                  d_saturation={d_saturation}
                  d_brightness={d_brightness}
                />
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
