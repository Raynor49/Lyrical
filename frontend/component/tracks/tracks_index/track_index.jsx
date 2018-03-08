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
        <TrackIndexItem key={track.id} track={track} idx={idx}/>
      );
    });
    return(
      <ul className='tracklist'>
        {tracks}
      </ul>
    );
  }
}

export default withRouter(TrackIndex);
