import React from 'react';

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
    if (this.props.authorId === this.props.currentUserId){
      deleteButton = <button className='delete-annotation' onClick={this.handleClick}>Delete Annotation</button>;
    }
    return(
      <ul className='annotation'>
        <li className='annotation-author'>{this.props.annotation ? this.props.annotation.author : 'Loading Author'}</li>
        <p className='annotation-body'>{this.props.annotation ? this.props.annotation.body : "Loading Annotation"}</p>
        {deleteButton}
      </ul>
    );
  }
}

export default Annotation;
