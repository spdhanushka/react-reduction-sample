import { combineReducers } from "redux";

const searchTitles = (state = [], action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return action.data;
    case "RESET_SEARCH":
      return [];
    default:
      return state;
  }
}

const searchDetails = (state = [], action) => {
  switch (action.type) {
    case "SET_SEARCH_DETAILS":
      return { ...state, [action.inputQuoteData] : action.data};
    default:
      return state;
  }
};

//Loading gif control over isFetching
const isFetching = (state = [], action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return true;
    case "SET_SEARCH_DETAILS":
      return false;
    default:
      return state;
  }
};

const reducer = combineReducers({
  searchTitles,
  searchDetails,
  isFetching
});

export default reducer;