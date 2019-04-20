import { combineReducers } from "redux";
import search from "./search";

const appReducer = combineReducers({
  search
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;