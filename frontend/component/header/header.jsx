import React from 'react';
import {openModal} from '../../actions/modal_actions.js';

const logged = (logout, username) => {
  return(
    <div>
      <h3 className='user'>{username}</h3>
      <button className='sesh-links' onClick={logout}>logout</button>
    </div>
  );
};

const notLogged = (openModal) => {
  return(<div>
    <button className='sesh-links' onClick={() => openModal('login')}>login</button>
    <button className='sesh-links' onClick={() => openModal('signup')}>signup</button>
  </div>);
};

const Header = (props) => {
  return(
    <nav>
      <h1 className='lyrical'>Lyrical</h1>
      {props.currentUser ? logged(props.logout, props.currentUser.username) : notLogged(props.openModal)}
    </nav>
  );
};

export default Header;
