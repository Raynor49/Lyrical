import React from 'react';
import { Redirect } from 'react-router-dom';
class AnnotationForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      body: this.props.body,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount(){
    
    this.setState({
      start_index: this.props.startIndex,
      end_index: this.props.endIndex
    });
  }

  handleSubmit(e){
    const ann = {
      body: this.state.body,
      start_index: this.props.startIndex,
      end_index: this.props.endIndex
    };
    e.preventDefault();

    this.props.action(this.props.trackId, ann).then(
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
    
    return(
      <form className='annotation-form' onSubmit={this.handleSubmit}>
        <textarea className='annotation-form-textbox' onChange={this.handleUpdate} value={this.state.body} />
        <input className='annotation-form-button' type='submit' value="Submit Annotation" />
      </form>
    );
  }
}

export default AnnotationForm;
