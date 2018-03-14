import merge from 'lodash/merge';
import {
  RECEIVE_TRACK,
  RECEIVE_ALL_TRACKS,
  REMOVE_TRACK
} from '../actions/track_actions.js';
import { RECEIVE_ANNOTATION } from '../actions/annotation_actions.js';

const tracksReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_TRACKS:
      return action.tracks;
    case RECEIVE_TRACK:
      return merge( {}, state, { [action.track.id]: action.track });
    case RECEIVE_ANNOTATION:
      let otherState = merge( {}, state );
      otherState[action.annotation.track_id].annotation_ids.push(action.annotation.id);
      return otherState;
    case REMOVE_TRACK:
      let newState = merge( {}, state );
      delete newState[action.trackId];
      return newState;
    default:
      return state;
  }
};

export default tracksReducer;
