import React from 'react';
import { Redirect } from 'react-router-dom';
class AnnotationForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      body: this.props.body,
      start_index: this.props.startIndex,
      end_index: this.props.endIndex
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleSubmit(e){
    //
    e.preventDefault();

    this.props.action(this.props.trackId, this.state).then(
      data => {
        return this.props.history.push(`/tracks/${this.props.trackId}/annotations/${data.annotation.id}`);
      }
    );
  }

  handleUpdate(e){
    //
    this.setState({
      body: e.target.value
    });
  }

  render(){
    //
    return(
      <form className='annotation-form' onSubmit={this.handleSubmit}>
        <textarea className='annotation-form-textbox' onChange={this.handleUpdate} value={this.state.body} />
        <input className='annotation-form-button' type='submit' value="Submit Annotation" />
      </form>
    );
  }
}

export default AnnotationForm;
