import {Link} from 'react-router-dom';
import React from 'react';

const Highlight = ({ annotation, lyrics }) => {
  return (
    <Link className='highlight' to={`/tracks/${annotation.track_id}/annotations/${annotation.id}`}>{lyrics}</Link>
  );
}

export default Highlight;
