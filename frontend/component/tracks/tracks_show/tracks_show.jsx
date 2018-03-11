import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

class TrackShow extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    //
    this.props.requestAllTracks();
    this.props.requestTrack(this.props.id);
  }

  handleClick(e){

    e.preventDefault();
    this.props.deleteTrack(this.props.id).then(
      () => this.props.history.push('/')
    );
  }

  render(){
    let trackToShow;
    if (this.props.track === undefined){
      trackToShow = {title:''};
    }else{
      trackToShow = this.props.track;
    }

    let editLink = '';
    let deleteButton = '';
    if ((this.props.currentUser !== null && this.props.track !== undefined) && this.props.currentUser.id === this.props.track.user_id){
      editLink = <Link className='track-edit-link' to={`/tracks/${this.props.id}/edit`}>Edit Track</Link>;
      deleteButton = <button className='delete-track' onClick={this.handleClick}>Delete Track</button>;
    }

    return(
      <div>
        <ul className="track-header">
          <li className="track-title">{trackToShow.title}</li>
          <li className="track-artist">{trackToShow.artist}</li>
          <li className="track-album"><div className='album-word'>Album</div> {trackToShow.album}</li>
          <li className="track-genre"><div className='genre-word'>Genre</div>  {trackToShow.genre}</li>
          <li className='edit-delete-links' >{editLink} {deleteButton}</li>
        </ul>

        <pre className='lyrics'>{trackToShow.lyrics}</pre>
      </div>
    );
  }
}

export default withRouter(TrackShow);
