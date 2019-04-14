import { createStore } from "redux";
import reducer from "../reducers";

const initialState = {
  offeredList: {
    dc: [],
    marvel: [],
    searchResult: []
  },
  teamList: {
    list: [{ name: "", url: "", counter: 0 }],
    isEmpty: true
  },
  searchValue: ""
};

const store = createStore(reducer, initialState);

export default store;
