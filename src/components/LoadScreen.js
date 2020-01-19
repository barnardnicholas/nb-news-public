import React, { Component } from "react";
import BlinkingCursor from "./BlinkingCursor";

class LoadScreen extends Component {
  state = {
    loadingBar: "__________________________________________________",
    percentDone: 0,
    spinner: ["-", "\\", "|", "/"],
    spinnerPhase: 0,
    loadingPhase: 1,
    masterStyling: {
      filter: "blur(0.75px)"
    }
  };

  componentDidUpdate() {
    const { loadingPhase } = this.state;
    if (loadingPhase === 6) {
      this.handleFinish();
    }
  }

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
    if (loadingPhase <= 5) {
      this.setState({ loadingPhase: newLoadingPhase });
    } else {
      this.handleFinish();
    }
  };

  loadingPhaseOne() {
    const { masterStyling } = this.state;
    return <BlinkingCursor style={masterStyling} />;
  }
  loadingPhaseTwo() {
    const { masterStyling } = this.state;
    return (
      <div>
        <p>-----##### TIBSOFT DISK OPERATING SYSTEM #####-----</p>
        <BlinkingCursor style={masterStyling} />
      </div>
    );
  }
  loadingPhaseThree() {
    const { loadingBar, percentDone, spinner, spinnerPhase } = this.state;
    return (
      <div>
        <p>-----##### TIBSOFT DISK OPERATING SYSTEM #####-----</p>
        <p>{`Loading from network...${spinner[spinnerPhase]}`}</p>
        <p>[Click or tap to skip load sequence]</p>
        <p>{`${loadingBar} ${percentDone}%`}</p>
      </div>
    );
  }
  loadingPhaseFour() {
    const {
      masterStyling,
      loadingBar,
      percentDone,
      spinner,
      spinnerPhase
    } = this.state;
    return (
      <div>
        <p>-----##### TIBSOFT DISK OPERATING SYSTEM #####-----</p>
        <p>{`Loading from network...`}</p>
        <p>[Click or tap to skip load sequence]</p>
        <p>{`${loadingBar} ${percentDone}%`}</p>
        <p>DONE!</p>
        <BlinkingCursor style={masterStyling} />
      </div>
    );
  }
  loadingPhaseFive() {
    const { masterStyling } = this.state;
    return (
      <div>
        <BlinkingCursor style={masterStyling} />
      </div>
    );
  }
  loadingPhaseSix() {
    return <>{this.handleFinish()}</>;
  }

  handleFinish = () => {
    const { finishLoading } = this.props;
    finishLoading();
  };

  render() {
    const { percentDone, loadingPhase, masterStyling } = this.state;

    if (loadingPhase === 1) {
      setTimeout(this.advanceLoadingPhase, 2770);
      return <>{this.loadingPhaseOne()}</>;
    } else if (loadingPhase === 2) {
      setTimeout(this.advanceLoadingPhase, 2100);
      return <>{this.loadingPhaseTwo()}</>;
    } else if (loadingPhase === 3) {
      if (percentDone < 100) {
        const interval = Math.random() * 200 + 50;
        setTimeout(this.tick, interval);
      } else {
        this.advanceLoadingPhase();
      }
      return <>{this.loadingPhaseThree()}</>;
    } else if (loadingPhase === 4) {
      setTimeout(this.advanceLoadingPhase, 1600);
      return <>{this.loadingPhaseFour()}</>;
    } else if (loadingPhase === 5) {
      setTimeout(this.advanceLoadingPhase, 1100);
      return <>{this.loadingPhaseFive()}</>;
    }
    return (
      <>
        <BlinkingCursor style={masterStyling} />
      </>
    );
  }
}

export default LoadScreen;
