import { connect } from 'react-redux';
import TracksForm from './tracks_form.jsx';
import { createTrack } from '../../../actions/track_actions';

const mapStateToProps = (state) => {
  return({
    errors: state.errors.tracks
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    createTrack: (track) => dispatch(createTrack(track))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(TracksForm);
