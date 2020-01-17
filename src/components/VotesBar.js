import React, { Component } from "react";
import thumbsUp from "../assets/thumbsup.png";
import thumbsDown from "../assets/thumbsdown.png";

class VotesBar extends Component {
  state = {
    voteUpDisabled: false,
    voteDownDisabled: false
  };

  manageVoteButtons = () => {
    const { userVotes } = this.props;
    if (userVotes >= 1) {
      this.setState({ voteUpDisabled: true });
    } else {
      this.setState({ voteUpDisabled: false });
    }

    if (userVotes <= -1) {
      this.setState({ voteDownDisabled: true });
    } else {
      this.setState({ voteDownDisabled: false });
    }
  };

  componentDidMount() {
    this.manageVoteButtons();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.manageVoteButtons();
    }
  }

  handleClickUp = () => {
    const { id, handleVote, userVotes } = this.props;
    handleVote(id, 1);
  };

  handleClickDown = () => {
    const { id, handleVote, userVotes } = this.props;
    handleVote(id, -1);
  };

  render() {
    const { id, votes, handleVote, userVotes } = this.props;
    const { voteUpDisabled, voteDownDisabled } = this.state;
    return (
      <div id="votesbar">
        <button
          className="votebutton"
          disabled={voteUpDisabled}
          onClick={this.handleClickUp}
        >
          {/* <h5 id="buttontext">Vote this!</h5> */}
          <img src={thumbsUp} alt="Vote Up" height="40" width="40" />
        </button>
        <button
          className="votebutton"
          disabled={voteDownDisabled}
          onClick={this.handleClickDown}
        >
          {/* <h5 id="buttontext">Vote this!</h5> */}
          <img src={thumbsDown} alt="Vote Up" height="40" width="40" />
        </button>
        <div id="votecount">
          <h4 id="votecounttext">{votes}</h4>
        </div>
      </div>
    );
  }
}

export default VotesBar;
