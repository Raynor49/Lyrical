import * as APIUtil from '../util/annotation_api_util.js';

export const REMOVE_ANNOTATION = 'REMOVE_ANNOTATION';
export const RECEIVE_ANNOTATION = 'RECEIVE_ANNOTATION';

export const receiveAnnotation = (annotation) => {
  return({
    type: RECEIVE_ANNOTATION,
    annotation
  });
};

export const removeAnnotation = (id) => {
  return({
    type: REMOVE_ANNOTATION,
    annotationId: id
  });
};

export const requestAnnotation = (id) => dispatch => {
  return(APIUtil.fetchAnnotation(id).then(
    annotation => dispatch(receiveAnnotation(annotation))
  ));
};

export const createAnnotation = (annotationData) => dispatch => {
  return(APIUtil.createAnnotation(annotationData).then(
    annotation => dispatch(receiveAnnotation(annotation))
  ));
};

export const updateAnnotation = (annotationData) => dispatch => {
  return(APIUtil.updateAnnotation(annotationData).then(
    annotation => dispatch(receiveAnnotation(annotation))
  ));
};

export const deleteAnnotation = (id) => dispatch => {
  return(APIUtil.deleteAnnotation(id).then(
    () => dispatch(removeAnnotation(id))
  ));
};
