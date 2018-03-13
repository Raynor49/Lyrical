import { connect } from 'react-redux';
import { createAnnotation } from '../../../actions/annotation_actions';

import AnnotationForm from './annotations_form';

const mapStateToProps = (state, ownParams) => {
  return({
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    createAnnotation: (trackId, annotation) => dispatch(createAnnotation(trackId, annotation))
  });
};


export default connect(null,mapDispatchToProps)(AnnotationForm);
