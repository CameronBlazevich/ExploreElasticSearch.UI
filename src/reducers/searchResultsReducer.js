import * as ActionTypes from "../actions/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_REQUEST_SUCCESS:
      return {
        results: action.searchResults
      };
    default:
      return state;
  }
};
