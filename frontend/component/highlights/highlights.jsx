import {NavLink} from 'react-router-dom';
import React from 'react';

const Highlight = ({ annotation, text }) => {
  
  return (
    <NavLink
      activeClassName='highlight-selected'
      className='highlight'
      to={`/tracks/${annotation.track_id}/annotations/${annotation.id}`}>{text}</NavLink>
  );
};

export default Highlight;
