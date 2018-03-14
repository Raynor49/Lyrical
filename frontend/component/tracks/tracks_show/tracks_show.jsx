import React from 'react';
import { withRouter, Link, Redirect, Route, Switch} from 'react-router-dom';
import AnnotationContainer from '../../annotations/annotations_show/annotation_container';
import AnnotationFormContainer from '../../annotations/annotations_form/annotations_form_container';
import Highlight from '../../highlights/highlights.jsx';
import {ProtectedRoute, AuthRoute} from '../../../util/route_util.jsx';
import Lyrics from '../../lyrics/lyrics';

class TrackShow extends React.Component{
  constructor(props){
    super(props);
    this.state = { startIndex: 0, endIndex: 0, text: ""};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    // this.props.requestAllTracks();
    this.props.requestTrack(this.props.id);
    // this.props.requestAllAnnotations();

  }

  handleClick(e){
    e.preventDefault();
    this.props.deleteTrack(this.props.id).then(
      () => this.props.history.push('/')
    );
  }

  renderHighlights(annotations, lyrics) {
    let result = [];

    if (annotations && annotations.length > 0){
      if (annotations.length > 1) {
        annotations = annotations.sort( (a, b) => {
          return(
            a.start_index - b.start_index
          );
        });
      }
      
      let currentAnnotationIdx = 0;
      let text = "";
      for (let i = 0; i < lyrics.length; i++) {
        const currentAnnotation = annotations[currentAnnotationIdx];
        //
        if ( currentAnnotation && i === currentAnnotation.start_index ){

          result.push(<Lyrics key={i}
                              currentUser={this.props.currentUser}
                              openModal={this.props.openModal}
                              trackId={this.props.id}
                              text={text}
                              offset={annotations[currentAnnotationIdx-1] ? annotations[currentAnnotationIdx-1].end_index : 0}
                              history={this.props.history}
                    />);


          result.push(<Highlight key={i+1} annotation={currentAnnotation} text={lyrics.slice(currentAnnotation.start_index,currentAnnotation.end_index)} />);

          i = currentAnnotation.end_index - 1;
          text="";
          currentAnnotationIdx++;

        }else{
          text += lyrics[i];
        }
      }
      result.push(<Lyrics key='1000'
                          currentUser={this.props.currentUser}
                          openModal={this.props.openModal}
                          text={text}
                          trackId={this.props.id}
                          offset={annotations[currentAnnotationIdx-1]}
                          history={this.props.history}
                  />);


      return result;
    }
    return (<Lyrics currentUser={this.props.currentUser}
                    openModal={this.props.openModal}
                    text={lyrics}
                    trackId={this.props.id}
                    offset='0'
                    history={this.props.history}
                    />);

  }
  //
  // selectText() {
  //   if (window.getSelection().type !== "None" && window.getSelection().toString() !== ""){
  //     let selObj = window.getSelection();
  //     let selRange = selObj.getRangeAt(0);
  //     let startidx = selRange.startOffset;
  //     let endidx = selRange.endOffset;
  //     let text = selObj.toString();
  //     this.setState({
  //       startIndex: startidx,
  //       endIndex: endidx,
  //       text: text,
  //     });
  //     if(this.props.currentUser){
  //       this.props.history.push(`/tracks/${this.props.id}/annotations/new/${startidx}/${endidx}`);
  //     }else{
  //       this.props.openModal('signup');
  //     }
  //   }
  // }

  render(){
    let trackToShow;

    let highlightLyrics;

    if (this.props.track === undefined){
      trackToShow = {title:''};
      highlightLyrics = '';
    }else{
      trackToShow = this.props.track;

      highlightLyrics = this.renderHighlights(this.props.annotations, trackToShow.lyrics);


    }

    let editLink = '';
    let deleteButton = '';

    if ((this.props.currentUser !== null && this.props.track !== undefined) && this.props.currentUser.id === this.props.track.user_id){
      editLink = <Link className='track-edit-link' to={`/tracks/${this.props.id}/edit`}>Edit Track</Link>;
      deleteButton = <button className='delete-track' onClick={this.handleClick}>Delete Track</button>;
    }

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
            <Switch>
              <ProtectedRoute path='/tracks/:trackId/annotations/new/:startIdx/:endIdx' component={AnnotationFormContainer} />
              <Route path='/tracks/:trackId/annotations/:annotationId' component={AnnotationContainer} />
            </Switch>
          </div>
        </div>

      </div>
    );
  }
}



export default withRouter(TrackShow);


//conditional in text select
//lyrics component
//switch to routes with history.push

//annotation form
//unnest author from annotations
