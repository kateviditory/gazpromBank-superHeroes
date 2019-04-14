import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Remover, Counter } from "..";
import "./Card.css";

class Card extends Component {
  handleClick(event) {
    if (this.props.className === "offeredCard") {
      // добавляем супергероя в команду
      if (this.props.teamList.isEmpty) {
        // команда супергероев пока пуста
        this.props.dispatch({
          type: "ADD_FIRST_HERO",
          name: this.props.name,
          url: this.props.url,
          counter: 1
        });
      } else {
        // в команде уже есть супергерои
        let found = this.props.teamList.list.findIndex(
          card => card.name === this.props.name
        );
        if (found !== -1) {
          // выбранный супергерой уже есть в команде
          let list = this.props.teamList.list;
          list[found].counter++;
          this.props.dispatch({
            type: "INCREMENT_COUNTER",
            list: list
          });
        } else {
          // добавляем нового супергероя в команду
          this.props.dispatch({
            type: "ONE_MORE_HERO",
            list: [
              ...this.props.teamList.list,
              { name: this.props.name, url: this.props.url, counter: 1 }
            ]
          });
        }
      }
    }
  }

  render() {
    let fragment = [],
      label = [];

    if (this.props.className === "selectedCard") {
      // если супергерой добавлен в команду, то добавляем в его карточку счетчик и крестик
      fragment = (
        <Fragment>
          <Remover item={this.props.name} teamList={this.props.teamList} />
          <Counter counter={this.props.counter} />
        </Fragment>
      );
    }

    if (this.props.className === "offeredCard") {
      // если карточку предлагается выбрать, то добавляем к ней подпись с именем супергероя
      label = <div className="label">{this.props.name}</div>;
    }

    return (
      <div className="cardsContainer">
        <div
          className={`Card ${this.props.className}`}
          style={{ backgroundImage: "url(" + this.props.url + ")" }}
          alt={this.props.name}
          title={this.props.name}
          onClick={this.handleClick.bind(this, this.props)}
        >
          {fragment}
        </div>
        {label}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    offeredList: {
      searchResult: state.offeredList.searchResult
    },
    teamList: {
      list: state.teamList.list,
      isEmpty: state.teamList.isEmpty
    }
  };
}

export default connect(mapStateToProps)(Card);
