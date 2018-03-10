import React from 'react';
import { connect } from 'react-redux';
import TrackForm from './tracks_form';
import { requestTrack, updateTrack } from '../../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
  const defaultTrack = { title: '', lyrics: '', artist: '', album: '', genre: '' };
  const track = state.entities.tracks[ownProps.match.params.trackId] || defaultTrack;
  const formType = 'Edit Track';

  return({
    errors: state.errors.tracks,
    track: track,
    formType: formType
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    requestTrack: id => dispatch(requestTrack(id)),
    action: track => dispatch(updateTrack(track))
  });
};

class EditTrackForm extends React.Component{
  componentDidMount() {
    this.props.requestTrack(this.props.match.params.trackId);
  }

  render() {
    return(
      <TrackForm
        action={this.props.action}
        formType={this.props.formType}
        track={this.props.track}
        errors={this.props.errors} />
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditTrackForm);
