import { connect } from 'react-redux';
import { requestTrack } from '../../../actions/track_actions';
import CommentIndex from './comment_index';
import { deleteComment } from '../../../actions/comment_actions';
import { requestAnnotation } from '../../../actions/annotation_actions';

const mapStateToProps = (state, ownParams) => {
  let commentIds = [];
  if (ownParams.type === 'annotation' && state.entities.annotations[ownParams.commentableId]){
    commentIds = state.entities.annotations[ownParams.commentableId].comment_ids;
  }else if (ownParams.type === 'track' && state.entities.tracks[ownParams.commentableId]){
    commentIds = state.entities.tracks[ownParams.commentableId].comment_ids;
  }

  const comments = commentIds.map( (commentId) => {
    return(
      state.entities.comments[commentId]
    );
  });

  return({
    commentableId: ownParams.commentableId,
    comments: Object.values(comments),
    currentUser: state.session.currentUser
  });
  // state.entities.comments ? Object.values(state.entities.comments) : [],
};

const mapDispatchToProps = (dispatch, ownParams) => {
  // let action;
  // if (ownParams.type === 'annotation'){
  //   action = (annotationId) => dispatch(requestAnnotation(annotationId));
  // }else{
  //   action = (trackId) => dispatch(requestTrack(trackId));
  // }
  const action = (ownParams.type === 'annotation') ?
    requestAnnotation :
    requestTrack;

  return({
    action: id => dispatch(action(id)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
