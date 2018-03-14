import {connect} from 'react-redux';
import TracksShow from './tracks_show.jsx';
import { requestTrack, requestAllTracks, deleteTrack } from '../../../actions/track_actions';
import { requestAllAnnotations } from '../../../actions/annotation_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownParams) => {
  const track = state.entities.tracks[ownParams.match.params.trackId];
  return({
    id: ownParams.match.params.trackId,
    track,
    annotations: track ? track.annotation_ids.map(id => state.entities.annotations[id]) : [],
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  //
  return({
    requestTrack: (id) => dispatch(requestTrack(id)),
    requestAllTracks: () => dispatch(requestAllTracks()),
    deleteTrack: (id) => dispatch(deleteTrack(id)),
    requestAllAnnotations: () => dispatch(requestAllAnnotations()),
    openModal: (modal) => dispatch(openModal(modal))
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(TracksShow);
