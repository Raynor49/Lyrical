import React from 'react';

class CommentIndexItem extends React.Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.deleteComment(this.props.id);
  }

  render(){
    let deleteButton = '';

    if (this.props.currentUser && this.props.currentUser.username === this.props.author){
      deleteButton = <input className='comment-delete-button' type='submit' value='Delete' onClick={this.handleClick} />;
    }

    return(
      <div className='comment-item'>
        <div className='comment-author'>{this.props.author}</div>
        <div className='comment-body'>{this.props.body}</div>
        {deleteButton}
      </div>
    );
  }
}

export default CommentIndexItem;
