import { connect } from 'redux';
import SessionForm from './session_form.jsx';
import { signup } from '../../actions/session_actions.js';

const mapStateToProps = (state) => {
  return({
    errors: state.errors,
    formType: 'SignUp'
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    processForm: (user) => dispatch(signup(user))
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm);
