import React from 'react';

class TrackCommentForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      body: this.props.body
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createTrackComment(this.props.trackId, this.state);
    this.setState({
      body: ''
    });
  }

  handleUpdate(e){
    this.setState({
      body: e.target.value
    });
  }

  render(){
    return(
      <div className='track-comment-form-background'>
        <form className='track-comment-form' onSubmit={this.handleSubmit}>
          <textarea className='track-comment-form-textbox' onChange={this.handleUpdate} value={this.state.body} />
          <input className='track-comment-form-button' type='submit' value="Submit Comment" />
        </form>
      </div>
    );
  }
}

export default TrackCommentForm;
