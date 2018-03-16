import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createTrackComment, createAnnotationComment } from '../../../actions/comment_actions.js';

const mapStateToProps = (state, ownParams) => {
  return({
    commentableId: ownParams.commentableId
  });
};

const mapDispatchToProps = (dispatch, ownParams) => {
  let action;
  if (ownParams.type === 'annotation'){
    action = (annotationId, comment) => dispatch(createAnnotationComment(annotationId, comment));
  }else{
    action = (trackId, comment) => dispatch(createTrackComment(trackId,comment));
  }
  return({
    action: action
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
