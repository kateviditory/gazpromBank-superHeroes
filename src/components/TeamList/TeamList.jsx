import React from "react";
import { App, Card } from "..";
import { connect } from "react-redux";
import "dragscroll";
import "./TeamList.css";

class TeamList extends App {
  //нужно ли App
  wheelHandler(event) {
    let container = document.getElementsByClassName("teamList")[0];
    container.scroll({
      left: container.scrollLeft + event.deltaY,
      behavior: "smooth"
    });
  }
  render() {
    let cards = [];
    if (this.props.teamList.isEmpty) {
      // команда супергероев пуста
      cards = [
        <p className="noSelectedCards" key="noSelectedCards">
          Выберите героя
        </p>
      ];
    } else {
      // отображаем команду супергероев
      cards = this.props.teamList.list.map(card => (
        <Card
          className="selectedCard"
          key={`${card.name}_selected`}
          url={card.url}
          name={card.name}
          counter={card.counter}
        />
      ));
    }
    return (
      <div className="teamList dragscroll" onWheel={this.wheelHandler}>
        {cards}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    teamList: state.teamList
  };
}

export default connect(mapStateToProps)(TeamList);
