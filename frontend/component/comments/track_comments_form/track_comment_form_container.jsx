import { connect } from 'react-redux';
import TrackCommentForm from './track_comment_form';
import { createTrackComment } from '../../../actions/comment_actions.js';

const mapStateToProps = (state, ownParams) => {
  return({
    trackId: ownParams.trackId
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    createTrackComment: (trackId, comment) => dispatch(createTrackComment(trackId,comment))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackCommentForm);
