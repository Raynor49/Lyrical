export const createAnnotation = (trackId, annotation) => {
  return($.ajax({
    url: `/api/tracks/${trackId}/annotations`,
    method: 'POST',
    data: {
      annotation
    }
  }));
};

export const fetchAnnotation = (id) => {
  return($.ajax({
    url: `/api/annotations/${id}`,
    method: 'GET',
  }));
};
export const fetchAnnotations = () => {
  return($.ajax({
    url: `/api/annotations/`,
    method: 'GET',
  }));
};

export const updateAnnotation = (annotation) => {
  return($.ajax({
    url: `/api/annotations/${annotation.id}`,
    method: 'PATCH',
    data: { annotation }
  }));
};

export const deleteAnnotation = (id) => {
  return($.ajax({
    url: `/api/annotations/${id}`,
    method: 'DELETE',
  }));
};
