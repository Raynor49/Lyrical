import { connect } from 'react-redux';
import { createAnnotation, requestAnnotation, requestAllAnnotations } from '../../../actions/annotation_actions';

import Annotation from './annotation';

const mapStateToProps = (state, ownParams) => {
  return({
    id: ownParams.match.params.annotationId,
    annotation: state.entities.tracks[ownParams.match.params.trackId].annotations[ownParams.match.params.annotationId]
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    createAnnotation: (trackId, annotation) => dispatch(createAnnotation(trackId, annotation)),
    requestAnnotation: (id) => dispatch(requestAnnotation(id)),
    requestAllAnnotations: () => dispatch(requestAllAnnotations())
  });
};


export default connect(mapStateToProps,mapDispatchToProps)(Annotation);
