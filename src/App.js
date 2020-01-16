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
import * as api from "./components/api";
import DialogBox from "./components/DialogBox.js";

class App extends Component {
  state = {
    windowText: "NC News v0.1",
    isLoading: false,
    isClosed: false,
    hasDialog: false,
    dialogWindowText: "Error",
    dialogMsg: "Error message",
    dialogOK: null,
    dialogCancel: null,
    loggedInUser: {
      username: "weegembump",
      avatar_url:
        "https://www.upandrunning.co.uk/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/m/r/mr-bump.jpg",
      name: "Gemma Bump"
    },
    d_hue: 0,
    d_saturation: 100,
    d_brightness: 100,
    d_blur: 0.75,
    d_flicker: true
  };

  switchUser = username => {
    api
      .getUserByUserName(username)
      .then(user => {
        this.setState({ loggedInUser: user, hasDialog: false });
      })
      .catch(err => {
        const windowText = "Error";
        const errorMsg = "Sorry, but the user you typed does not exist";
        const okDialog = () => {
          this.closeDialog();
        };
        const cancelDialog = () => {
          this.closeDialog();
        };
        this.throwDialog(windowText, errorMsg, okDialog, cancelDialog);
      });
  };

  changeHue = value => {
    this.setState({ d_hue: value });
  };

  changeSaturation = value => {
    this.setState({ d_saturation: value });
  };

  changeBrightness = value => {
    this.setState({ d_brightness: value });
  };

  resetDisplaySettings = () => {
    this.setState({ d_hue: 0, d_saturation: 100, d_brightness: 100 });
  };

  throwDialog = (windowText, msg, onOK, onCancel) => {
    this.setState({
      hasDialog: true,
      dialogWindowText: windowText,
      dialogMsg: msg,
      dialogOK: onOK,
      dialogCancel: onCancel
    });
  };

  closeDialog = () => {
    this.setState({ hasDialog: false });
  };

  renderMasterWindow() {
    const { loggedInUser, windowText } = this.state;
    const { d_hue, d_saturation, d_brightness, d_blur, hasDialog } = this.state;
    const masterStyling = {
      filter: `blur(${d_blur}px) hue-rotate(${d_hue}deg) grayscale(${100 -
        d_saturation}%) brightness(${d_brightness}%)`
    };
    return (
      <div id="masterwindow" style={masterStyling}>
        <WindowBar windowText={windowText} />
        <div id="windowcontent">
          {hasDialog && this.renderDialog()}
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
                  switchUser={this.switchUser}
                  changeHue={this.changeHue}
                  changeSaturation={this.changeSaturation}
                  changeBrightness={this.changeBrightness}
                  d_hue={d_hue}
                  d_saturation={d_saturation}
                  d_brightness={d_brightness}
                  resetDisplaySettings={this.resetDisplaySettings}
                  throwDialog={this.throwDialog}
                  closeDialog={this.closeDialog}
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

  renderDialog() {
    const {
      d_blur,
      d_hue,
      d_saturation,
      d_brightness,
      dialogWindowText,
      dialogMsg,
      dialogOK,
      dialogCancel
    } = this.state;
    const masterStyling = {
      filter: `blur(${d_blur}px) hue-rotate(${d_hue}deg) grayscale(${100 -
        d_saturation}%) brightness(${d_brightness}%)`
    };
    return (
      <DialogBox
        windowText={dialogWindowText}
        msg={dialogMsg}
        style={masterStyling}
        okDialog={dialogOK}
        cancelDialog={dialogCancel}
      />
    );
  }

  render() {
    const {
      isLoading,
      hasDialog,
      d_blur,
      d_hue,
      d_saturation,
      d_brightness
    } = this.state;
    const masterStyling = {
      filter: `blur(${d_blur}px) hue-rotate(${d_hue}deg) grayscale(${100 -
        d_saturation}%) brightness(${d_brightness}%)`
    };
    return (
      <div className="App">
        {/* <Overlay /> */}
        {isLoading ? this.renderLoading() : this.renderMasterWindow()}
      </div>
    );
  }
}

export default App;
