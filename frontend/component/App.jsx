import React from 'react';
import { Route, Link} from 'react-router-dom';
import LoginFormContainer from './session/login_form_container.jsx';
import SignupFormContainer from './session/signup_form_container.jsx';
import Modal from './modal/modal';
import {openModal} from '../actions/modal_actions.js';

const App = () => (
  <div>
    <Modal />
    <nav>
      <h1 className='lyrical'>Lyrical</h1>
      <div>
        <button className='sesh-links' onClick={() => dispatch(openModal('login'))}>login</button>
        <button className='sesh-links' onClick={() => dispatch(openModal('signup'))}>signup</button>
      </div>
    </nav>

  </div>
);

export default App;
