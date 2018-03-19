import React from 'react';
import {openModal} from '../../actions/modal_actions.js';
import {Link} from 'react-router-dom';


const Logged = ({logout, currentUser }) => {
  return(
    <div className='subheader'>
      <h3 className='user'>{currentUser.username}</h3>
      <Link className='new-song-link' to='/tracks/new' >Add a Song</Link>
      <button className='sesh-links' onClick={logout}>logout</button>
    </div>
  );
};

const NotLogged = ({openModal}) => {
  return(<div className='subheader'>
    <button className='sesh-links' onClick={() => openModal('login')}>login</button>
    <button className='sesh-links' onClick={() => openModal('signup')}>signup</button>
    <button className='sesh-links' onClick={() => openModal('demo')}>DemoLogin</button>
  </div>);
};

const Header = (props) => {
  return(
    <nav>
      <Link className='lyrical' to='/'>Lyrical</Link>
      {props.currentUser ? <Logged {...props}/> : <NotLogged {...props}/> }
    </nav>
  );
};

export default Header;
