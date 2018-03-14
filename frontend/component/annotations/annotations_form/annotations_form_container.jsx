import { connect } from 'react-redux';
import { createAnnotation } from '../../../actions/annotation_actions';

import AnnotationForm from './annotations_form';

const mapStateToProps = (state, ownParams) => {
  
  return({
    body: '',
    startIndex: ownParams.match.params.startIdx,
    endIndex: ownParams.match.params.endIdx,
    trackId: ownParams.match.params.trackId
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    action: (trackId, annotation) => dispatch(createAnnotation(trackId, annotation))
  });
};


export default connect(mapStateToProps,mapDispatchToProps)(AnnotationForm);
