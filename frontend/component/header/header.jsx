import React from 'react';
import {openModal} from '../../actions/modal_actions.js';

const logged = (logout) => {
  debugger
  return(
    <div>
      <button className='sesh-links' onClick={logout}>logout</button>
    </div>
  );
};

const notLogged = (openModal) => {
  return(<div>
    <button className='sesh-links' onClick={openModal}>login</button>
    <button className='sesh-links' onClick={openModal}>signup</button>
  </div>);
};

const Header = (props) => {
  return(
    <nav>
      <h1 className='lyrical'>Lyrical</h1>
      {props.loggedIn ? logged(props.logout) : notLogged(props.openModal)}
    </nav>
  );
};

export default Header;
