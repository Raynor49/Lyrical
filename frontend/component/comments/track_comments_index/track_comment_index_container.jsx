import { connect } from 'react-redux';
import { requestTrack } from '../../../actions/track_actions';
import CommentIndex from './track_comment_index';

const mapStateToProps = (state, ownParams) => {
  debugger
  return({
    comments: state.entities.comments ? Object.values(state.entities.comments) : []
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    requestTrack: (trackId) => dispatch(requestTrack(trackId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
