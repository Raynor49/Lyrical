import {connect} from 'react-redux';
import trackIndex from './track_index';
import { requestAllTracks } from '../../../actions/track_actions';

const mapStateToProps = state => {
  return({
    tracks: Object.values(state.entities.tracks)
  });
};

const mapDispatchToProps = dispatch => {
  return({
    requestAllTracks: () => dispatch(requestAllTracks())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(trackIndex);
