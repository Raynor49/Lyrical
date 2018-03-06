import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import {login, logout, signup} from './util/session_api_util.js';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch; // just for testing!
  ReactDOM.render(<h1>LYRICAL</h1>, document.getElementById('root'));
});

window.login = login;
window.logout = logout;
window.signup = signup;
