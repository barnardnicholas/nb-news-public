import React from "react";
import TopicCard from "./TopicCard";
import Loading from "./Loading";

const TopicsList = props => {
  const { topics } = props;

  const displayLoading = () => {
    return <Loading />;
  };

  const displayList = () => {
    return (
      <ul id="topicslist">
        {topics.map(topic => {
          return (
            <TopicCard className="topiccard" key={topic.slug} topic={topic} />
          );
        })}
      </ul>
    );
  };

  return (
    <>
      <div id="topictitle">
        <h3>Topics</h3>
      </div>
      {topics.length === 0 ? displayLoading() : displayList()}
    </>
  );
};

export default TopicsList;
