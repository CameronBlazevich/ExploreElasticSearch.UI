import { createSelector } from 'reselect';

const getUnrefinedSearchResults = state =>
  state.searchResults.unrefinedSearchResults;
const getRefinementCriteria = state => state.searchCriteria.refinementCriteria;

export const refineSearchResults = createSelector(
  [getUnrefinedSearchResults, getRefinementCriteria],
  (unrefinedSearchResults, refinementCriteria) => {
    let refinedSearchResults =
      refinementCriteria.length === 0
        ? unrefinedSearchResults
        : unrefinedSearchResults.filter(result =>
            refinementCriteria.some(
              rf => {
                if (Array.isArray(result.parentArticle[rf.field])) {
                  //ToDo: make this generic val.fullName sucks
                  return result.parentArticle[rf.field].some(val => val.fullName === rf.value);
                }
                return result.parentArticle[rf.field] === rf.value
              }
            )
          );
    return refinedSearchResults;
  }
);
