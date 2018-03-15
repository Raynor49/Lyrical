import * as APIUtil from '../util/comments_api_util.js';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComment = (comment) => {
  return({
    type: RECEIVE_COMMENT,
    comment
  });
};

// export const requestComment = (id) => (dispatch) => {
//   return(APIUtil.fetchComment(id).then(
//     comment => dispatch(receiveComment(comment))
//   ));
// };

export const createTrackComment = (comment) => dispatch => {
  return(APIUtil.createTrackComment(comment).then(
    comment => dispatch(receiveComment(comment))
  ));
};
export const createAnnotationComment = (comment) => dispatch => {
  return(APIUtil.createAnnotationComment(comment).then(
    comment => dispatch(receiveComment(comment))
  ));
};

// export const receiveAllComments = (comments) => {
//   return({
//     type: RECEIVE_ALL_COMMENTS,
//     comments
//   });
// };
//
// export const requestAllTrackComments = () => dispatch => {
//   return(APIUtil.fetchTrackComments().then(
//     comments => dispatch(receiveAllComments(comments))
//   ));
// };
// export const requestAllAnnotationComments = () => dispatch => {
//   return(APIUtil.fetchAnnotationComments().then(
//     comments => dispatch(receiveAllComments(comments))
//   ));
// };

export const removeComment = (id) => {
  return({
    type: REMOVE_COMMENT,
    commentId: id
  });
};

export const deleteComment = (id) => dispatch => {
  return(APIUtil.deleteComment(id).then(
    () => dispatch(removeComment(id))
  ));
};
