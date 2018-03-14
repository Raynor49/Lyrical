import merge from 'lodash/merge';
import {
  RECEIVE_ANNOTATION,
  REMOVE_ANNOTATION
} from '../actions/annotation_actions.js';
import {
  RECEIVE_TRACK
} from '../actions/track_actions.js';


const annotationReducer = (state={}, action) => {

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRACK:
      return action.annotations ? action.annotations : [];
    case RECEIVE_ANNOTATION:
      return merge({}, state, {[action.annotation.id]: action.annotation});
    case REMOVE_ANNOTATION:
      const newState = merge({}, state);
      delete newState[action.annotationId];
      return newState;
    default:
      return state;
  }
};

export default annotationReducer;
