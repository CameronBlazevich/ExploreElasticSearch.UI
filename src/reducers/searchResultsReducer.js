import * as ActionTypes from '../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_REQUEST_SUCCESS:
      const authors = getAuthorsFromSearchResults(action.searchResults);
      const participants = getParticipantsFromSearchResults(
        action.searchResults
      );
      return {
        unrefinedSearchResults: action.searchResults,
        filteredResults: action.searchResults,
        authors,
        participants
      };

    default:
      return state;
  }
};

const getAuthorsFromSearchResults = searchResults => {
  const authors = mergeDedupe(searchResults.map(sr => sr.parentArticle.author));
  const formattedAuthors = authors.map(a => ({ displayText: a }));
  return formattedAuthors;
};

const getParticipantsFromSearchResults = searchResults => {
  const participants = searchResults.map(sr =>
    sr.parentArticle.participants.map(p => p.fullName)
  );
  const dedupedParticipants = mergeDedupe(participants);
  const formattedParticipants = dedupedParticipants.map(p => ({
    displayText: p
  }));
  return formattedParticipants;
};

const mergeDedupe = arrays => {
  return [...new Set([].concat(...arrays))];
};
