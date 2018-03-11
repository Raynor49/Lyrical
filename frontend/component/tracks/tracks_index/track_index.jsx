import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import TrackIndexItem from './track_index_item.jsx';

class TrackIndex extends React.Component{

  componentDidMount(){
    this.props.requestAllTracks();
  }

  render() {
    // debugger
    const tracks = this.props.tracks.map( (track, idx) => {
      return(
        <TrackIndexItem key={track.id} track={track} idx={idx} id={track.id}/>
      );
    });
    return(
      <div>
        <div className='cover-image'>
        </div>
        <h1 className='top-songs'>Top Songs</h1>
        <ul className='tracklist'>
          {tracks}
        </ul>
      </div>
    );
  }
}

export default withRouter(TrackIndex);
