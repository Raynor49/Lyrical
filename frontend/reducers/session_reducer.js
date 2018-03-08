import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions.js';

const _defaultState = { currentUser: null };

const sessionReducer = (state = _defaultState, action) => {
  
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, { currentUser: action.currentUser });
    default:
      return state;
  }
};

export default sessionReducer;
