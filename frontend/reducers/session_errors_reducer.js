import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions.js';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
