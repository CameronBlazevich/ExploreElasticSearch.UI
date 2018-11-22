import { combineReducers } from "redux";
import searchResultsReducer from "./searchResultsReducer";
export default combineReducers({
  searchResults: searchResultsReducer
});
