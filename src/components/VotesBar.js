import React from "react";

const VotesBar = ({ id, votes, handleVote, userHasVoted }) => {
  const handleClick = () => {
    handleVote(id, 1);
  };

  return (
    <div id="votesbar">
      <button disabled={userHasVoted} onClick={handleClick}>
        <h5 id="buttontext">Vote this!</h5>
      </button>
      <div>
        <h4>{votes}</h4>
      </div>
    </div>
  );
};

export default VotesBar;
