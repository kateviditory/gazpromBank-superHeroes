function reducer(state = {}, action) {
  switch (action.type) {
    case "UNIVERSE":
      return {
        offeredList: {
          dc: action.dc,
          marvel: action.marvel,
          searchResult: state.offeredList.searchResult
        },
        teamList: state.teamList,
        searchValue: state.searchValue
      };

    case "ADD_FIRST_HERO":
      return {
        offeredList: state.offeredList,
        teamList: {
          list: [
            { name: action.name, url: action.url, counter: action.counter }
          ],
          isEmpty: false
        },
        searchValue: state.searchValue
      };

    case "ONE_MORE_HERO":
    case "INCREMENT_COUNTER":
    case "DECREMENT_COUNTER":
    case "DELETE_CARD":
      return {
        offeredList: state.offeredList,
        teamList: {
          list: action.list,
          isEmpty: false
        },
        searchValue: state.searchValue
      };

    case "DELETE_LAST_CARD":
      return {
        offeredList: state.offeredList,
        teamList: {
          list: action.list,
          isEmpty: action.isEmpty
        },
        searchValue: state.searchValue
      };

    case "SEARCH_RESULT":
      return {
        offeredList: {
          dc: state.offeredList.dc,
          marvel: state.offeredList.marvel,
          searchResult: action.searchResult
        },
        teamList: state.teamList,
        searchValue: state.searchValue
      };

    case "NEW_VALUE":
    case "CLEAR_SEARCH":
      return {
        offeredList: state.offeredList,
        teamList: state.teamList,
        searchValue: action.searchValue
      };

    default:
      return state;
  }
}

export default reducer;
