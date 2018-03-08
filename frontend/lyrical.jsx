import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import {fetchTracks, fetchTrack, updateTrack} from './util/track_api_util.js';
import { receiveAllTracks } from './actions/track_actions.js';
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
  window.receiveAllTracks = receiveAllTracks;
  window.fetchTracks = fetchTracks;
  // window.fetchTracks = fetchTracks;
  // window.fetchTrack = fetchTrack;
  // window.deleteTrack = deleteTrack;
  // window.createTrack = createTrack;
  // window.updateTrack = updateTrack;
  window.getState = store.getState;
  // window.dispatch = store.dispatch; // just for testing!
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});
