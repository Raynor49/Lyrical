import { connect } from 'react-redux';
import SessionForm from './session_form.jsx';
import { login, clearErrors } from '../../actions/session_actions.js';
import { openModal, closeModal} from '../../actions/modal_actions';
import React from 'react';

const mapStateToProps = (state, ownParams) => {
  return({
    errors: state.errors.session,
    formType: 'Login',
    username: ownParams.username ? ownParams.username : null,
    password: ownParams.password ? ownParams.password : null
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    processForm: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm);
