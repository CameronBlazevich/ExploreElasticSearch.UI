import { combineReducers } from "redux";
import searchResultsReducer from "./searchResultsReducer";
import searchCriteriaReducer from "./searchCriteriaReducer";
import playableTranscriptReducer from "./playableTranscriptReducer";
export default combineReducers({
  searchResults: searchResultsReducer,
  searchCriteria: searchCriteriaReducer,
  playableTranscript: playableTranscriptReducer,
});
