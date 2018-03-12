import React from 'react';

class Annotation extends React.Component{

  render(){
    return(
      <ul className='annotation'>
        <li className='annotation-author'>{this.props.annotation.author.username}</li>
        <p className='annotation-body'>{this.props.annotation.body}</p>

      </ul>
    );
  }
}

export default Annotation;
