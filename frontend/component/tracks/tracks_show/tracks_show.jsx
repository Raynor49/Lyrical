import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class TrackShow extends React.Component{

  componentDidMount(){
    // debugger
    this.props.requestAllTracks();
    this.props.requestTrack(this.props.id);
  }

  render(){

    let trackToShow;
    if (this.props.track === undefined){
      trackToShow = {title:''};
    }else{
      trackToShow = this.props.track;
    }

    let editLink = '';
    if ((this.props.currentUser !== undefined && this.props.track !== undefined) && this.props.currentUser.id === this.props.track.user_id){
      editLink = 'Edit Song';
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
        <input type='submit' value={editLink}/>
      </div>
    );
  }
}

export default withRouter(TrackShow);
