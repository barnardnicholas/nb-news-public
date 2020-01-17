import React, { Component } from "react";

class BlinkingCursor extends Component {
  state = {
    textToDisplay: "_",
    visible: true
  };

  toggleCursor = () => {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  };

  renderCursor() {
    const { textToDisplay } = this.state;
    return (
      <div>
        <p>{textToDisplay}</p>
      </div>
    );
  }

  render() {
    const { visible } = this.state;
    setTimeout(this.toggleCursor, 333);
    return <>{visible && this.renderCursor()}</>;
  }
}

export default BlinkingCursor;
