import React from 'react';
import { withRouter, Link, Redirect, Route } from 'react-router-dom';
import AnnotationContainer from '../../annotations/annotation_container';
import Highlight from '../../highlights/highlights.jsx';

class TrackShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {showStatus: false, startIndex: 0, endIndex: 0,
    lyrics: "", selectedAnnotationId: null};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    // this.props.requestAllTracks();
    this.props.requestTrack(this.props.id);
    this.props.requestAllAnnotations();
  }

  handleClick(e){
    e.preventDefault();
    this.props.deleteTrack(this.props.id).then(
      () => this.props.history.push('/')
    );
  }

  renderHighlights(annotations, lyrics) {
    let result = [];
    if (annotations){

      let start = 0;
      Object.values(annotations).forEach( (annotation) => {
        let text = '';
        while (start !== annotation.start_index){

          text += lyrics[start];
          start++;
        }
        result.push(text);
        result.push(<Highlight annotation={annotation} lyrics={lyrics.slice(annotation.start_index,annotation.end_index)} />);
        start = annotation.end_index;

      });
      let text = '';
      while (start !== lyrics.length-1){
        text += lyrics[start];
        start++;
      }
      result.push(text);
      return result;
    }
    return lyrics;

  }

  render(){
    let trackToShow;
    let annotation = <div></div>;
    let highlightLyrics;
    if (this.props.track === undefined){
      trackToShow = {title:''};
      highlightLyrics = '';
    }else{
      trackToShow = this.props.track;
      annotation = <Route path='/tracks/:trackId/annotations/:annotationId' component={AnnotationContainer} />;
      highlightLyrics = this.renderHighlights(trackToShow.annotations, trackToShow.lyrics);
    }

    let editLink = '';
    let deleteButton = '';

    if ((this.props.currentUser !== null && this.props.track !== undefined) && this.props.currentUser.id === this.props.track.user_id){
      editLink = <Link className='track-edit-link' to={`/tracks/${this.props.id}/edit`}>Edit Track</Link>;
      deleteButton = <button className='delete-track' onClick={this.handleClick}>Delete Track</button>;

    }

    // const annotations = [
    //   { startIndex: 10, endIndex: 20 },
    //   { startIndex: 25, endIndex: 40 },
    // ]

    //need to map here and render some as normal text and render some as link components
    return(
      <div className='track-show-page'>
        <ul className="track-header">
          <li className="track-title">{trackToShow.title}</li>
          <li className="track-artist">{trackToShow.artist}</li>
          <li className="track-album"><div className='album-word'>Album</div> {trackToShow.album}</li>
          <li className="track-genre"><div className='genre-word'>Genre</div>  {trackToShow.genre}</li>
          <li className='edit-delete-links' >{editLink} {deleteButton}</li>
        </ul>



        <div className='lyrics-annotation'>
          <pre className='lyrics'>{highlightLyrics}</pre>
          <div className='annotation-box'>
            {annotation}
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(TrackShow);
