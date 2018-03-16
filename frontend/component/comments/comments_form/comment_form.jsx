import React from 'react';

class CommentForm extends React.Component{
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
    this.props.action(this.props.commentableId, this.state);
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
    let name1;
    let name2;
    let name3;
    let name4;
    if (this.props.type === 'track'){
      name1 = 'track-comment-form-background';
      name2 = 'track-comment-form';
      name3 = 'track-comment-form-textbox';
      name4 = 'track-comment-form-button';
    }else{
      name1 = 'annotation-comment-form-background';
      name2 = 'annotation-comment-form';
      name3 = 'annotation-comment-form-textbox';
      name4 = 'annotation-comment-form-button';
    }
    return(
      <div className={name1}>
        <form className={name2} onSubmit={this.handleSubmit}>
          <textarea className={name3} onChange={this.handleUpdate} value={this.state.body} />
          <input className={name4} type='submit' value="Submit Comment" />
        </form>
      </div>
    );
  }
}

export default CommentForm;
