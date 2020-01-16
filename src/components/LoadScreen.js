import React, { Component } from "react";
import BlinkingCursor from "./BlinkingCursor";

class LoadScreen extends Component {
  state = {
    loadingBar: "__________________________________________________",
    percentDone: 0,
    spinner: ["-", "\\", "|", "/"],
    spinnerPhase: 0,
    loadingPhase: 1
  };

  advanceLoadingBar = percentDone => {
    percentDone += 2;
    let result = "";
    for (let i = percentDone / 2; i > 0; i--) {
      result += "#";
    }
    for (let i = 50 - percentDone / 2; i > 0; i--) {
      result += "_";
    }
    return result;
  };

  tick = () => {
    let { percentDone, spinnerPhase } = this.state;
    this.setState({
      loadingBar: this.advanceLoadingBar(percentDone),
      percentDone: (percentDone += 2),
      spinnerPhase: spinnerPhase < 3 ? (spinnerPhase += 1) : 0
    });
  };

  advanceLoadingPhase = () => {
    let { loadingPhase } = this.state;
    let newLoadingPhase = (loadingPhase += 1);
    this.setState({ loadingPhase: newLoadingPhase });
  };

  handleFinish = () => {
    const { finishLoading } = this.props;
    finishLoading();
  };

  render() {
    const {
      loadingBar,
      percentDone,
      spinner,
      spinnerPhase,
      loadingPhase
    } = this.state;
    const { finishLoading } = this.props;
    const masterStyling = {
      filter: "blur(0.75px)"
    };
    if (loadingPhase === 1) {
      setTimeout(this.advanceLoadingPhase, 2770);
      return <BlinkingCursor style={masterStyling} />;
    } else if (loadingPhase === 2) {
      setTimeout(this.advanceLoadingPhase, 2100);
      return (
        <div id="blinkingcursor">
          <p>--## TIBSOFT DISK OPERATING SYSTEM ##--</p>
        </div>
      );
    } else if (loadingPhase === 3) {
      if (percentDone < 100) {
        setTimeout(this.tick, 150);
      }
      this.advanceLoadingPhase();

      if (loadingPhase === 4) {
        console.log("finished");
      }
      return (
        <div id="blinkingcursor">
          <p>--## TIBSOFT DISK OPERATING SYSTEM ##--</p>
          <p>{`${spinner[spinnerPhase]} ${spinner[spinnerPhase]}`}</p>
          <p>{`${loadingBar} ${percentDone}%`}</p>
        </div>
      );
    }
  }
}

export default LoadScreen;
