import * as ActionTypes from "./actionTypes";
import SearchResultApi from "../api/searchResultsApi";

export function searchRequest(searchTerm) {
  return { type: ActionTypes.SEARCH_REQUEST, searchTerm };
}

export function searchRequestSuccess(searchResults) {
  return { type: ActionTypes.SEARCH_REQUEST_SUCCESS, searchResults };
}

export function doSearch(searchTerm) {
  return function(dispatch) {
    dispatch(searchRequest(searchTerm));
    SearchResultApi.search(searchTerm)
      .then((searchResults) => {
        dispatch(searchRequestSuccess(searchResults));
      })
      .catch((error) => {
        throw error;
      });
  };
}
