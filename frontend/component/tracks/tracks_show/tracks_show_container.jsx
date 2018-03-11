import {connect} from 'react-redux';
import TracksShow from './tracks_show.jsx';
import { requestTrack, requestAllTracks, deleteTrack } from '../../../actions/track_actions';

const mapStateToProps = (state, ownParams) => {
  return({
    id: ownParams.match.params.trackId,
    track: state.entities.tracks[ownParams.match.params.trackId],
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  //
  return({
    requestTrack: (id) => dispatch(requestTrack(id)),
    requestAllTracks: () => dispatch(requestAllTracks()),
    deleteTrack: (id) => dispatch(deleteTrack(id))
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(TracksShow);
