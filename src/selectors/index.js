import { createSelector } from 'reselect';

const getUnrefinedSearchResults = state =>  state.searchResults.unrefinedSearchResults;
const getRefinementCriteria = state => state.searchCriteria.refinementCriteria;

export const refineSearchResults = createSelector(
  [getUnrefinedSearchResults, getRefinementCriteria],
  (unrefinedSearchResults, refinementCriteria) => {
    let refinedSearchResults = refinementCriteria.length === 0 ? unrefinedSearchResults : unrefinedSearchResults.filter(result => refinementCriteria.some(rf => result.parentArticle[rf.field] === rf.value));
    return refinedSearchResults;
  }
)
