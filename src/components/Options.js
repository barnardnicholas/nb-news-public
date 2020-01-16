import React, { Component } from "react";

class Options extends Component {
  state = {
    usernameInput: ""
  };

  handleChangeHue = event => {
    const { changeHue } = this.props;
    const { value } = event.target;
    changeHue(value);
  };

  handleChangeSaturation = event => {
    const { changeSaturation } = this.props;
    const { value } = event.target;
    changeSaturation(value);
  };

  handleChangeBrightness = event => {
    const { changeBrightness } = this.props;
    const { value } = event.target;
    changeBrightness(value);
  };

  handleResetDisplay = () => {
    const { resetDisplaySettings } = this.props;
    resetDisplaySettings();
  };

  handleUsernameInput = event => {
    const { value } = event.target;
    this.setState({ usernameInput: value });
  };

  handleSwitchUser = event => {
    event.preventDefault();
    const { switchUser, throwDialog, closeDialog } = this.props;
    const { usernameInput } = this.state;
    const okDialog = () => switchUser(usernameInput);
    const cancelDialog = () => closeDialog();
    throwDialog(
      "Switch User?",
      "Do you want to switch user?",
      okDialog,
      cancelDialog
    );
    // switchUser(usernameInput);
  };

  render() {
    const { d_hue, d_saturation, d_brightness } = this.props;
    const { usernameInput } = this.state;

    return (
      <div id="options">
        <h3>Options</h3>
        <div id="optionssection">
          <h4>Display Settings</h4>
          <label>
            {`Hue: ${d_hue}deg`}
            <div id="slider">
              <input
                type="range"
                min="0"
                max="359"
                value={d_hue}
                onChange={this.handleChangeHue}
              ></input>
            </div>
          </label>
          <br />
          <label>
            {`Saturation: ${d_saturation}%`}
            <div id="slider">
              <input
                type="range"
                min="0"
                max="100"
                value={d_saturation}
                onChange={this.handleChangeSaturation}
              ></input>
            </div>
          </label>
          <br />
          <label>
            {`Brightness: ${d_brightness}%`}
            <div id="slider">
              <input
                type="range"
                min="50"
                max="150"
                value={d_brightness}
                onChange={this.handleChangeBrightness}
              ></input>
            </div>
          </label>
          <br />
          <button onClick={this.handleResetDisplay}>Default Settings</button>
        </div>
        <div id="optionssection">
          <h4>User Settings</h4>
          <form onSubmit={this.handleSwitchUser}>
            <label>
              Please type a username to switch user:
              <br />
              <input
                type="text"
                value={usernameInput}
                autocorrent="off"
                spellCheck="false"
                onChange={this.handleUsernameInput}
              ></input>
              <button>Submit</button>
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default Options;
