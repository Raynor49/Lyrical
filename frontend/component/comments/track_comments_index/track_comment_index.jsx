import React from 'react';
import TrackCommentIndexItem from './track_comment_index_item.jsx';
class TrackCommentIndex extends React.Component{
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.requestTrack(this.props.trackId);
  }

  render(){
    let comments = this.props.comments ? this.props.comments.map( (comment) => {
      return(
        <TrackCommentIndexItem
          body={comment.body}
          id={comment.id}
          author={comment.author}
          currentUser={this.props.currentUser}
          deleteComment={this.props.deleteComment}/>
      );
    }) : 'Loading Comments';
    return(
      <div className='comment-index-background'>
        <ul className='comment-index'>{comments}</ul>
      </div>
    );
  }
}

export default TrackCommentIndex;
