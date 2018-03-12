import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import {createAnnotation, fetchAnnotation, updateAnnotation} from './util/annotation_api_util.js';
import { receiveAnnotation, requestAnnotation } from './actions/annotation_actions.js';
import Root from './component/root.jsx';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = {};
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: {
          id: window.currentUser.id,
          username: window.currentUser.username,
        }
      }
    };
    delete window.currentUser;
  }

  const store = configureStore(preloadedState);
  // window.receiveAllTracks = receiveAllTracks;
  // window.fetchTracks = fetchTracks;
  // window.fetchTrack = fetchTrack;
  // window.deleteTrack = deleteTrack;
  // window.createTrack = createTrack;
  // window.updateTrack = updateTrack;
  // window.requestAllTracks = requestAllTracks;
  // window.createAnnotation = createAnnotation;
  // window.requestAnnotation = requestAnnotation;
  // window.receiveAnnotation = receiveAnnotation;
  // window.fetchAnnotation = fetchAnnotation;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch; // just for testing!
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});
