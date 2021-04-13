import React, { Component } from "react";
import "../index.css";

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.click = this.onClick.bind(this, "Normal bind");

    this.state = {
      text: "",
      spanText: "",
    };
  }
  // In React we no need to call addEventListener()

  /*
  when you reference this inside an arrow function
  it treat this as any other variable and look for its declaration in its scope
  first and it can not find it so it search the upper scope
  which is the this referring to the react component class which what is required so we do not need to bind the this to the class.
  But in regular funtions if we use this keyword it wil not judge it as this class variable
  For that we need to bind that function.
  binding function will give another function variable that works as same as this.fun()
  Another way of call that function for example in onClick -> we should wrap that 
  inside an annoynmous function() & in this case we can call the funtion directly
  and also can pass the parameter, without annoynmous function() we need to pass parameter inside bind
  We also need to bind or wrap funtions when we need to pass value inside parameter
  
   */

  // we need to bind this function
  // we can also bind it inside the constructor
  onClick(v) {
    if (v === "Normal bind") {
      this.setState({ spanText: "Normal bind" });
    } else {
      this.setState({ spanText: "Arrow bind" });
    }
    this.setState({ text: "binding" });
  }

  // Here, e is a synthetic event. React defines these synthetic events
  // here 'e' is the object/element which is called the function
  // e.target returns the object/element
  // in React when we pass funtions as data attributes the componenet automatically
  // pass itselft as e inside the paremeter
  // if we just call it as variable function that time e will work
  // if we call it with parameter then e will not work
  onChange = (e) => {
    let inputText = e.target.value;

    /*
      Note: If we want to load data on real time from database based to text change
      or from search then we need to do that inside setState(changeValue, dataCahangeMethod)
      second paremeter by making a call back method.
      Making task after setState() will have a delay.
    */
    this.setState({ text: inputText }, () => {
      console.log(inputText);
    });

    // skippng this call and make it inside setState()
    // console.log(inputText);
  };

  render() {
    return (
      <div>
        <input
          class="text-input"
          type="text"
          onChange={this.onChange}
          placeholder="Write something"
        ></input>
        &nbsp;&nbsp;
        <button
          id="btn"
          onClick={() => {
            this.onClick("Arrow bind");
          }}
        >
          Bind with arrow function
        </button>
        &nbsp;&nbsp;
        <button id="btn" onClick={this.click}>
          Normal bind
        </button>
        &nbsp;&nbsp;
        <span>{this.state.spanText}</span>
        <p className="event-para">{this.state.text}</p>
      </div>
    );
  }
}
