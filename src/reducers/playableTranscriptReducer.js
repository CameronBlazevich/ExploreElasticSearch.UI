import * as ActionTypes from "../actions/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.GET_PLAYABLE_TRANSCRIPT_SUCCESS:
      const transcript = action.transcript;
      const temp = Object.assign({}, state, transcript);
      return temp;
    default:
      return state;
  }
};
