import React, { Component } from "react";
import { connect } from "react-redux";
import { Card } from "..";
import { Link } from "react-router-dom";
import "./SearchForm.css";

class SearchForm extends Component {
  handleChange(event) {
    this.props.dispatch({
      type: "NEW_VALUE",
      searchValue: event.target.value
    });
  }
  doSearch() {
    let found,
      item = document.getElementById("searchItem").value;
    found = this.props.offeredList.dc.find(
      card => card.name.toLowerCase() === item.toLowerCase()
    );
    if (!found)
      found = this.props.offeredList.marvel.find(
        card => card.name.toLowerCase() === item.toLowerCase()
      );
    if (!found) {
      found = (
        <p className="noFoundCards" key="noFoundCards">
          Ничего не найдено
        </p>
      );
    } else {
      found = (
        <Card
          key={found.name}
          url={found.image}
          name={found.name}
          className="offeredCard"
        />
      );
    }
    this.props.dispatch({
      type: "SEARCH_RESULT",
      searchResult: found
    });
  }
  render() {
    return (
      <div className="searchForm">
        <input
          id="searchItem"
          type="text"
          placeholder="Имя героя"
          value={this.props.searchValue}
          onChange={this.handleChange.bind(this)}
        />
        <Link to="/search_result">
          <input type="submit" value="" onClick={this.doSearch.bind(this)} />
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    offeredList: state.offeredList,
    searchValue: state.searchValue
  };
}

export default connect(mapStateToProps)(SearchForm);
