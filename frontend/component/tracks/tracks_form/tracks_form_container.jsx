import { connect } from 'react-redux';
import TracksForm from './tracks_form.jsx';
import { createTrack } from '../../../actions/track_actions';

const mapStateToProps = (state) => {
  return({
    track: { title: '', lyrics: '', artist: '', album: '', genre: '' },
    errors: state.errors.tracks,
    formType: 'Add a Song'
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    action: (track) => dispatch(createTrack(track))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(TracksForm);
