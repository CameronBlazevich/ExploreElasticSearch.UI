import * as ActionTypes from "../actions/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_REQUEST:
      return Object.assign({}, state, {...state, searchTerm: action.searchTerm});

    case ActionTypes.UPDATE_REFINEMENT_CRITERIA_REQUEST:
      const criteriaAlreadyContainCriterion = state.refinementCriteria.some(rc => rc.value === action.refinementCriteria.value && rc.field === action.refinementCriteria.field);
      const updateRefinementCriteria = criteriaAlreadyContainCriterion ?
        state.refinementCriteria.filter(rc => !(rc.value === action.refinementCriteria.value && rc.field === action.refinementCriteria.field)) :
        [...state.refinementCriteria, action.refinementCriteria]

      return Object.assign({}, state, {...state, refinementCriteria: updateRefinementCriteria})

    case ActionTypes.CLEAR_ALL_REFINEMENT_CRITERIA: 
      return Object.assign({}, state, {...state, refinementCriteria:[]})
      
    default:
      return state;
  }
};