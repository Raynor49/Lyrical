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
        <ul className="track-header">
          <li className="track-title">{trackToShow.title}</li>
          <li className="track-artist">{trackToShow.artist}</li>
          <li className="track-album"><div className='album-word'>Album</div> {trackToShow.album}</li>
          <li className="track-genre"><div className='genre-word'>Genre</div>  {trackToShow.genre}</li>
        </ul>

        <pre className='lyrics'>{trackToShow.lyrics}</pre>
      </div>
    );
  }
}

export default withRouter(TrackShow);
