import {connect} from 'react-redux';
import Header from './header.jsx';
import {logout} from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return({
    loggedIn: Boolean(state.session.currentUser)
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal))
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);
