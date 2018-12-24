import { combineReducers } from "redux";
import searchResultsReducer from "./searchResultsReducer";
import searchCriteriaReducer from './searchCriteriaReducer';
export default combineReducers({
  searchResults: searchResultsReducer,
  searchCriteria: searchCriteriaReducer,
});
