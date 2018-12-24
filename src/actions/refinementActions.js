import * as ActionTypes from './actionTypes';

export function updateRefinementCriteriaRequest(refinementCriteria) {
  return {
    type: ActionTypes.UPDATE_REFINEMENT_CRITERIA_REQUEST,
    refinementCriteria
  };
}

export function updateRefinementCriteriaSuccess(refinedSearchResults) {
  return {
    type: ActionTypes.UPDATE_REFINEMENT_CRITERIA_SUCCESS,
    refinedSearchResults
  };
}

export function updateRefinementCriteria(refinementCriteria) {
  return function(dispatch) {
    dispatch(updateRefinementCriteriaRequest(refinementCriteria))
  };
}
