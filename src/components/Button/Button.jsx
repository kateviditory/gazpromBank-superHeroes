import React, { Component } from "react";
import "./Button.css";
import store from "../../store";

export default class Button extends Component {
  clearSearch() {
    store.dispatch({
      type: "CLEAR_SEARCH",
      searchValue: ""
    });
  }
  render() {
    return (
      <button className={`btn ${this.props.attr}`} onClick={this.clearSearch} />
    );
  }
}
