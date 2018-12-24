import * as ActionTypes from "../actions/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_REQUEST_SUCCESS:
    const authors = getAuthorsFromSearchResults(action.searchResults);
      return {
        unrefinedSearchResults: action.searchResults,
        filteredResults: action.searchResults,
        authors
      };

    default:
      return state;
  }
};

const getAuthorsFromSearchResults = (searchResults) => {
  return [{displayText: "Tim Ferriss"}, {displayText: "Rhonda Patrick"}, {displayText: "Dom Dagustino"} ]
}