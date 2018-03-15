import React from 'react';
import TrackCommentIndexItem from './track_comment_index_item.jsx';
class CommentIndex extends React.Component{
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.requestTrack(this.props.trackId);
  }

  render(){
    debugger
    let comments = this.props.comments ? this.props.comments.map( (comment) => {
      return(
        <TrackCommentIndexItem
          body={comment.body}
          id={comment.id}
          author={comment.author} />
      );
    }) : 'Loading Comments';
    return(
      <ul>{comments}</ul>
    );
  }
}

export default CommentIndex;
