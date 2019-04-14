import React, { Component } from "react";
import axios from "axios";
import "./OfferedList.css";
import { Card } from "..";
import { connect } from "react-redux";

class OfferedList extends Component {
  componentWillMount() {
    axios
      .get("../superheroes.json") // загружаю данные о супергероях из файла в store
      .then(response => {
        this.props.dispatch({
          type: "UNIVERSE",
          dc: response.data.dc,
          marvel: response.data.marvel
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    let cards = [];

    if (this.props.universe === "dc" || !this.props.universe) {
      //если была нажата кнопка dc, вывожу в OfferedList всех супергероев dc
      cards = this.props.offeredList.dc.map(card => (
        <Card
          key={card.name}
          url={card.image}
          name={card.name}
          className="offeredCard"
        />
      ));
    } else if (this.props.universe === "marvel") {
      //если была нажата кнопка marvel, вывожу в OfferedList всех супергероев marvel
      cards = this.props.offeredList.marvel.map(card => (
        <Card
          key={card.name}
          url={card.image}
          name={card.name}
          className="offeredCard"
        />
      ));
    } else {
      //если была нажата кнопка поиска, вывожу в OfferedList результат поиска
      cards.push(this.props.offeredList.searchResult);
    }
    return <div className="offeredList">{cards}</div>;
  }
}

function mapStateToProps(state) {
  return {
    offeredList: {
      dc: state.offeredList.dc,
      marvel: state.offeredList.marvel,
      searchResult: state.offeredList.searchResult
    }
  };
}

export default connect(mapStateToProps)(OfferedList);
