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
    return(
      <ul className='annotation'>
        <li className='annotation-author'>{this.props.annotation ? this.props.annotation.author : 'Loading Author'}</li>
        <p className='annotation-body'>{this.props.annotation ? this.props.annotation.body : "Loading Annotation"}</p>
        <button className='delete-annotation' onClick={this.handleClick}>Delete Annotation</button>
      </ul>
    );
  }
}

export default Annotation;
