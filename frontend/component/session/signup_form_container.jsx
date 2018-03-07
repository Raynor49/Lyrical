import { connect } from 'react-redux';
import SessionForm from './session_form.jsx';
import { signup } from '../../actions/session_actions.js';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return({
    errors: state.errors,
    formType: 'SignUp'
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    processForm: (user) => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal())
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm);
