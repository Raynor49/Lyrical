import React from 'react';

class Annotation extends React.Component{

  render(){
    return(
      <ul className='annotation'>
        <li className='annotation-author'>{this.props.annotation ? this.props.annotation.author : 'Loading Author'}</li>
        <p className='annotation-body'>{this.props.annotation ? this.props.annotation.body : "Loading Annotation"}</p>

      </ul>
    );
  }
}

export default Annotation;
