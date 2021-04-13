import React, { Component } from "react";
import "./index.css";

// state is used to change data witout loading
// or change data when user interect
// setState() method to change the state object values
export default class STATE extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increament = () => {
    let btn = document.getElementById("incr-btn");
    if (this.state.count === 10) {
      alert("Cannot increase more than 10");
      btn.disabled = true;
      return;
    } else {
      btn.disabled = false;
    }
    this.setState({
      count: this.state.count + 1,
    });
  };

  decreament = () => {
    let btn = document.getElementById("incr-btn");
    btn.disabled = false;
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="state-div">
        <h1 className="state-count">Count state: {count}</h1>
        <button
          onClick={this.decreament}
          className="dcr"
          disabled={count == 0 ? true : false}
        >
          -
        </button>
        <button onClick={this.increament} className="icr" id="incr-btn">
          +
        </button>
      </div>
    );
  }
}
