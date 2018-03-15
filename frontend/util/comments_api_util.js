export const fetchAnnotationComments = (annotationId) => {
  return($.ajax({
    url: `api/annotations/${annotationId}/comments`,
    method: 'GET'
  }));
};

export const fetchTrackComments = (trackId) => {
  return($.ajax({
    url: `api/tracks/${trackId}/comments`,
    method: 'GET'
  }));
};

export const createTrackComment = (trackId, comment) => {
  return($.ajax({
    url: `api/tracks/${trackId}/comments`,
    method: 'POST',
    data: { comment }
  }));
};

export const createAnnotationComment = (annotationId, comment) => {
  return($.ajax({
    url: `api/annotations/${annotationId}/comments`,
    method: 'POST',
    data: { comment }
  }));
};

export const deleteComment = (commentId) => {
  return($.ajax({
    url: `/api/comments/${commentId}`,
    method: "DELETE"
  }));
};
