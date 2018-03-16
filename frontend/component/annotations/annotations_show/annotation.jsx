import React from 'react';
import CommentIndexContainer from '../../comments/comments_index/comment_index_container';
import CommentFormContainer from '../../comments/comments_form/comment_form_container';
class Annotation extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.deleteAnnotation(this.props.id).then(
      () => this.props.history.push(`/tracks/${this.props.trackId}`)
    );
  }

  render(){
    let deleteButton = <div></div>;
    let annotationComments = <div></div>;
    let annotationCommentForm = <div></div>;

    if (this.props.authorId === this.props.currentUserId){
      deleteButton = <button
        className='delete-annotation'
         onClick={this.handleClick}
         >Delete Annotation</button>;
    }

    if (this.props.id){
      annotationComments = <CommentIndexContainer
        trackId={this.props.trackId}
         type='annotation'
         commentableId={this.props.id}
          />;
    }

    if (this.props.id !== undefined && this.props.currentUserId !== null){
      annotationCommentForm = <CommentFormContainer type='annotation' commentableId={this.props.id}/>;
    }

    return(
      <ul className='annotation'>
        <li className='annotation-author'>{this.props.annotation ? this.props.annotation.author : 'Loading Author'}</li>
        <p className='annotation-body'>{this.props.annotation ? this.props.annotation.body : "Loading Annotation"}</p>
        {deleteButton}
        {annotationCommentForm}
        {annotationComments}
      </ul>
    );
  }
}

export default Annotation;
