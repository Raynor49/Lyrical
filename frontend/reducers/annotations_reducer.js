import merge from 'lodash/merge';
import {
  RECEIVE_ANNOTATION,
  REMOVE_ANNOTATION,
  RECEIVE_ALL_ANNOTATIONS
} from '../actions/annotation_actions.js';


const annotationReducer = (state={}, action) => {

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_ANNOTATIONS:
      return action.annotations;
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
