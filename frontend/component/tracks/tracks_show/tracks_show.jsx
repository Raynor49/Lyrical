import React from 'react';
import { withRouter } from 'react-router-dom';

class TrackShow extends React.Component{

  componentDidMount(){
    // debugger
    this.props.requestAllTracks();
    this.props.requestTrack(this.props.id);
  }

  render(){
    // debugger
    let trackToShow;
    if (this.props.track === undefined){
      trackToShow = {title:''};
    }else{
      trackToShow = this.props.track;
    }
    return(
      <div>
        <h2 className="track-header">
          {trackToShow.title}
          {trackToShow.artist}
          {trackToShow.album}
          {trackToShow.genre}
        </h2>

        <p className='lyrics'>{trackToShow.lyrics}</p>
      </div>
    );
  }
}

export default withRouter(TrackShow);
