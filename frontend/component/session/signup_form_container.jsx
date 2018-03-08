import { connect } from 'react-redux';
import SessionForm from './session_form.jsx';
import { signup, clearErrors } from '../../actions/session_actions.js';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return({
    errors: state.errors.session,
    formType: 'SignUp'
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    processForm: (user) => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm);
