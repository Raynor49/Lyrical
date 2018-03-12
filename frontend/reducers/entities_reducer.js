import {combineReducers} from 'redux';
import tracksReducer from './tracks_reducer';
import annotationsReducer from './annotations_reducer.js';

const entitiesReducer = combineReducers({
  tracks: tracksReducer,
  annotations: annotationsReducer
});

export default entitiesReducer;
