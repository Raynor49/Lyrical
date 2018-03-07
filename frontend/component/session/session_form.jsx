import React from 'react';
import {withRouter, Link} from 'react-router-dom';

class SessionForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state).then(this.props.closeModal);
  }

  updateField(field){
    return ((e) => {
      this.setState({[field]: e.target.value});
    });
  }

  render() {
    let title;
    let link;
    let linkname;
    if (this.props.formType === 'SignUp'){
      title = 'Sign Up';
    }else{
      title = 'Log In';
    }

    let errors;
    if (this.props.errors.length){
      errors = <h2>Errors: {this.props.errors}</h2>;
    }

    return(
      <div className='sesh-form'>
        <div className='close-x' onClick={this.props.closeModal}>X</div>
        <h2 className='title'>{title}</h2>
        {errors}
        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input onChange={this.updateField('username')} type='text' value={this.state.username} />
          </label>
          <label>Password
            <input onChange={this.updateField('password')} type='password' value={this.state.password} />
          </label>
          <input type='submit' value={this.props.formType}/>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
