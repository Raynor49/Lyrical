import { connect } from 'react-redux';
import { createAnnotation, deleteAnnotation } from '../../../actions/annotation_actions';

import Annotation from './annotation';

const mapStateToProps = (state, ownParams) => {
  return({
    id: ownParams.match.params.annotationId,
    trackId: ownParams.match.params.trackId,
    annotation: state.entities.annotations[ownParams.match.params.annotationId]
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    createAnnotation: (trackId, annotation) => dispatch(createAnnotation(trackId, annotation)),
    deleteAnnotation: (id) => dispatch(deleteAnnotation(id))
  });
};


export default connect(mapStateToProps,mapDispatchToProps)(Annotation);
