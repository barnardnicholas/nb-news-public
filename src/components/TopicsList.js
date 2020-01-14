import React from "react";
import TopicCard from "./TopicCard";

const TopicsList = props => {
  const { topics } = props;
  return (
    <>
      <div id="topictitle">
        <h3>Topics</h3>
      </div>
      <ul id="topicslist">
        {topics.map(topic => {
          return (
            <TopicCard className="topiccard" key={topic.slug} topic={topic} />
          );
        })}
      </ul>
    </>
  );
};

export default TopicsList;
