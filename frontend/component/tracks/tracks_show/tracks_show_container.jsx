import {connect} from 'react-redux';
import TracksShow from './tracks_show.jsx';
import { requestTrack, requestAllTracks } from '../../../actions/track_actions';

const mapStateToProps = (state, ownParams) => {
  // debugger
  return({
    id: ownParams.match.params.trackId,
    track: state.entities.tracks[ownParams.match.params.trackId]
  });
};

const mapDispatchToProps = (dispatch) => {
  // debugger
  return({
    requestTrack: (id) => dispatch(requestTrack(id)),
    requestAllTracks: () => dispatch(requestAllTracks())
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(TracksShow);
