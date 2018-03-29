import {connect} from 'react-redux';
import Header from './header.jsx';
import {logout, login} from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch, {history}) => {
  return({
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user)),
    openModal: (modal) => dispatch(openModal(modal))
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);
