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

  componentDidMount(){
    if (this.props.username){
      this.setState(
        {username: this.props.username,
        password: this.props.password}
      );
    }
  }

  componentWillUnmount(){
    this.props.clearErrors();
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

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={idx}>
            {error}
          </li>
        ))}
      </ul>
    );
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

    return(
      <div className='sesh-form'>
        <div className='close-x' onClick={this.props.closeModal}>X</div>
        <h2 className='title'>{title}</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input onChange={this.updateField('username')} type='text' value={this.state.username} />
          </label>
          <label>Password
            <input onChange={this.updateField('password')} type='password' value={this.state.password} />
          </label>
          <input className='session-button' type='submit' value={this.props.formType}/>
            {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
