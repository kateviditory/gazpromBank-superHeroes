import React, { Component } from "react";
import "./Counter.css";

export default class Counter extends Component {
  render() {
    let hideClass = "";
    if (this.props.counter < 2) {
      hideClass = "hide";
    }
    return (
      <div className={`counter ${hideClass}`}>
        <div className="counterText">{this.props.counter}</div>
      </div>
    );
  }
}
