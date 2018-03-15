import merge from 'lodash/merge';
import {
  RECEIVE_COMMENT,
  RECEIVE_ALL_COMMENTS,
  REMOVE_COMMENT
} from '../actions/comment_actions.js';
import { RECEIVE_TRACK } from '../actions/track_actions.js';
import { RECEIVE_ANNOTATION } from '../actions/annotation_actions.js';

const commentReducer = (state={}, action) => {
  switch (action.type) {
    case RECEIVE_TRACK:
      return action.comments ? action.comments : [];
    case RECEIVE_ANNOTATION:
      return action.comments ? action.comments : [];
    case RECEIVE_COMMENT:
      return merge({}, state, {[action.comment.id]: action.comment});
    case REMOVE_COMMENT:
      let newState = merge({}, state);
      delete newState[action.commentId];
      return newState;
    default:
      return state;
  }
};

export default commentReducer;
