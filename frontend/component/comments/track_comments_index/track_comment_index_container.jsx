import { connect } from 'react-redux';
import { requestTrack } from '../../../actions/track_actions';
import TrackCommentIndex from './track_comment_index';
import { deleteComment } from '../../../actions/comment_actions';

const mapStateToProps = (state, ownParams) => {
  return({
    comments: state.entities.comments ? Object.values(state.entities.comments) : [],
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    requestTrack: (trackId) => dispatch(requestTrack(trackId)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackCommentIndex);
