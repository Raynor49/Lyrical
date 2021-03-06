import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import TrackIndexItem from './track_index_item.jsx';

class TrackIndex extends React.Component{

  componentDidMount(){
    this.props.requestAllTracks();
  }

  render() {
    //
    const tracks = this.props.tracks.map( (track, idx) => {
      return(
        <TrackIndexItem key={track.id} track={track} idx={idx} id={track.id}/>
      );
    });
    return(
      <div className='tracks-index'>
        <div className='cover-image'>
        </div>
        <h1 className='top-songs'>Top Songs</h1>
        <ul className='tracklist'>
          {tracks}
        </ul>
        <div className='personal-links'>
          <a className='linkedin' href="http://www.linkedin.com/in/willis-roberts-8a3b8883">My LinkedIn!</a>
          <a className='github' href="https://github.com/Raynor49">My GitHub!</a>
        </div>
      </div>
    );
  }
}

export default withRouter(TrackIndex);
