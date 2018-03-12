import React from 'react';

class Annotation extends React.Component{

  componentDidMount(){
  }

  render(){
    return(
      <ul>
        <li>It has rendered correctly</li>
        <li>body={this.props.annotation.body}</li>
        <li>id={this.props.id}</li>
      </ul>
    );
  }
}

export default Annotation;
