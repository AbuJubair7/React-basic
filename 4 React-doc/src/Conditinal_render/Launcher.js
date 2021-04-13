import React, { Component } from "react";
import Home from "./Home";
import Login from "./Login";
export default class Launcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogedIn: true,
    };
  }

  // Here, e is a synthetic event. React defines these synthetic events
  showButtonAlert(e) {
    alert(`${e.target.innerHTML} is clicked`);
  }

  render() {
    const { isLogedIn } = this.state;
    const element = isLogedIn ? <Home /> : <Login />;
    return (
      <div id="main">
        {/* // in jsx when we call method inside button onlick we just need to call it as variable
           // giving parenthesis '()' will automatically call the method once and nothing happen when we click button */}
        <button onClick={this.showButtonAlert}>Show button alert</button>
        <button onClick={showAlert}>alert</button>
        {element}
      </div>
    );
  }
}

function showAlert(e) {
  console.log(e.target.innerHTML);
  alert("Welcome to launcher page");
}
