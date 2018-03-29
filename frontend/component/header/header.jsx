import React from 'react';
import {openModal} from '../../actions/modal_actions.js';
import {Link} from 'react-router-dom';


const Logged = ({logout, currentUser }) => {
  return(
    <div className='subheader-signedin'>
      <h3 className='user'>{currentUser.username}</h3>
      <div className='newsong-sesh-links'>
        <Link className='new-song-link' to='/tracks/new' >ADD SONG</Link>
        <button className='sesh-links' onClick={logout}>LOGOUT</button>
      </div>
      <div></div>
    </div>
  );
};

const NotLogged = ({openModal, login}) => {
  return(<div className='subheader-signedout'>
    <button className='sesh-links' onClick={() => openModal('login')}>LOGIN</button>
    <button className='sesh-links' onClick={() => openModal('signup')}>SIGNUP</button>
    <button className='sesh-links' onClick={() => login({username: 'SeededUser', password: 'seededpass'})}>DEMO-LOGIN</button>
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
