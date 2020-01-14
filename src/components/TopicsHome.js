import React, { Component } from "react";
import TopicsList from "./TopicsList";
import * as dummyData from "./dummy-data";

class TopicsHome extends Component {
  state = { topics: [] };

  componentDidMount() {
    this.setState({ topics: dummyData.topics });
  }

  render() {
    const { topics } = this.state;
    return (
      <div id="topicshome">
        <TopicsList topics={topics} />
      </div>
    );
  }
}

export default TopicsHome;
