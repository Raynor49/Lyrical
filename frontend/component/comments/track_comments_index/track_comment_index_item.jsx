import React from 'react';
const TrackCommentIndexItem = (props) => {
  return(
    <div>
      <div>{props.author}</div>
      <div>{props.body}</div>
      <div>{props.id}</div>
    </div>
  );
};

export default TrackCommentIndexItem;
