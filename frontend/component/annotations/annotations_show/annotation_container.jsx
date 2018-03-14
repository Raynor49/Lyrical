import { connect } from 'react-redux';
import { createAnnotation, deleteAnnotation } from '../../../actions/annotation_actions';

import Annotation from './annotation';

const mapStateToProps = (state, ownParams) => {
  return({
    id: ownParams.match.params.annotationId,
    trackId: ownParams.match.params.trackId,
    annotation: state.entities.annotations[ownParams.match.params.annotationId],
    authorId: state.entities.annotations[ownParams.match.params.annotationId] ? state.entities.annotations[ownParams.match.params.annotationId].user_id : null,
    currentUserId: state.session.currentUser ? state.session.currentUser.id : null
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    createAnnotation: (trackId, annotation) => dispatch(createAnnotation(trackId, annotation)),
    deleteAnnotation: (id) => dispatch(deleteAnnotation(id))
  });
};


export default connect(mapStateToProps,mapDispatchToProps)(Annotation);
