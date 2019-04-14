import React, { Component } from "react";
import "./Remover.css";
import store from "../../store";

export default class Remover extends Component {
  removeCard(event) {
    event.stopPropagation(); // чтобы событие onClick не сработало на Card
    let list = this.props.teamList.list;
    let index = list.findIndex(card => card.name === this.props.item);
    if (list[index].counter > 1) {
      // уменьшаем счетчик
      list[index].counter--;
      store.dispatch({
        type: "DECREMENT_COUNTER",
        list: list
      });
    } else {
      // удаляем карточку супергероя из команды
      list.splice(index, 1);
      if (list.length) {
        store.dispatch({
          type: "DELETE_CARD",
          list: list
        });
      } else {
        // очищаем команду супергероев полностью
        store.dispatch({
          type: "DELETE_LAST_CARD",
          list: { name: "", url: "", counter: 0 },
          isEmpty: true
        });
      }
    }
  }
  render() {
    return <div className="remove" onClick={this.removeCard.bind(this)} />;
  }
}
