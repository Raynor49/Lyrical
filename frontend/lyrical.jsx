import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import {login, logout, signup} from './util/session_api_util.js';
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
  // window.getState = store.getState;
  // window.dispatch = store.dispatch; // just for testing!
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});

// window.login = login;
// window.logout = logout;
// window.signup = signup;
