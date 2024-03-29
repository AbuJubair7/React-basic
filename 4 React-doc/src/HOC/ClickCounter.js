import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.counter}>
          Click {this.props.count} times
        </button>
      </div>
    );
  }
}
export default withCounter(ClickCounter);
