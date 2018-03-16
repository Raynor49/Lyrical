import React from 'react';
import CommentIndexItem from './comment_index_item.jsx';
class CommentIndex extends React.Component{
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.action(this.props.commentableId);
  }

  render(){
    let comments = [];
    this.props.comments.forEach( (comment) => {
      if (comment){
        comments.push(<CommentIndexItem
          body={comment.body}
          id={comment.id}
          author={comment.author}
          currentUser={this.props.currentUser}
          deleteComment={this.props.deleteComment}/>);
      }
    });
    let name1;
    let name2;
    if (this.props.type === 'track'){
      name1 = 'comment-index-background';
      name2 = 'comment-index';
    }
    return(
      <div className={name1}>
        <ul className={name2}>{comments}</ul>
      </div>
    );
  }
}

export default CommentIndex;
