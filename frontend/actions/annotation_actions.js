import * as APIUtil from '../util/annotation_api_util.js';

export const REMOVE_ANNOTATION = 'REMOVE_ANNOTATION';
export const RECEIVE_ANNOTATION = 'RECEIVE_ANNOTATION';
export const RECEIVE_ALL_ANNOTATIONS = 'RECEIVE_ALL_ANNOTATIONS';

export const receiveAnnotation = ({annotation, comments}) => {
  return({
    type: RECEIVE_ANNOTATION,
    annotation,
    comments
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

export const receiveAllAnnotations = (annotations) => {

  return({
    type: RECEIVE_ALL_ANNOTATIONS,
    annotations
  });
};
export const requestAllAnnotations = () => dispatch => {
  return(APIUtil.fetchAnnotations().then(
    annotations => dispatch(receiveAllAnnotations(annotations))
  ));
};

export const createAnnotation = (trackId, annotationData) => dispatch => {
  return(APIUtil.createAnnotation(trackId, annotationData).then(
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
