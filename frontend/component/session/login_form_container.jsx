import { connect } from 'react-redux';
import SessionForm from './session_form.jsx';
import { login } from '../../actions/session_actions.js';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';

const mapStateToProps = (state) => {
  return({
    errors: state.errors,
    formType: 'Login'
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    processForm: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal())
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm);
