import React, { Component } from "react";
import withCounter from "./withCounter";

const HoverCounter = (props) => {
  return (
    <div>
      <h1 onMouseOver={props.counter}>Hover {props.count} times</h1>
    </div>
  );
};
export default withCounter(HoverCounter);
