import { connect } from 'react-redux';
import TracksForm from './tracks_form.jsx';
import { createTrack } from '../../../actions/track_actions';

const mapDispatchToProps = (dispatch) => {
  return({
    createTrack: (track) => dispatch(createTrack(track))
  });
};

export default connect(null, mapDispatchToProps)(TracksForm);
