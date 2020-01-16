import React, { Component } from "react";

class Options extends Component {
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
    const { changeHue, changeSaturation, changeBrightness } = this.props;
    changeHue(0);
    changeSaturation(100);
    changeBrightness(100);
  };

  render() {
    const { d_hue, d_saturation, d_brightness } = this.props;
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
                defaultValue="0"
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
                defaultValue="100"
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
                defaultValue="100"
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
        </div>
      </div>
    );
  }
}

export default Options;
