import React from 'react';
import {withRouter} from 'react-router-dom';

class TrackForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      title: '',
      genre: '',
      artist: '',
      album: '',
      lyrics: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateField(field){
    return( (e) => {
      this.setState({[field]: e.target.value});
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createTrack(this.state).then(
      data => this.props.history.push(`/tracks/${data.track.id}`)
    );
  }


  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Title
          <input onChange={this.updateField('title')} type='text' value={this.state.title}/>
        </label>
        <label>Lyrics
          <textarea onChange={this.updateField('lyrics')} value={this.state.lyrics}/>
        </label>
        <label>Genre
          <label>Rap
            <input name='track' onChange={this.updateField('genre')} type='radio' value="Rap"/>
          </label>
          <label>Pop
            <input name='track' onChange={this.updateField('genre')} type='radio' value="Pop"/>
          </label>
          <label>Country
            <input name='track' onChange={this.updateField('genre')} type='radio' value="Country"/>
          </label>
          <label>Rock
            <input name='track' onChange={this.updateField('genre')} type='radio' value="Rock"/>
          </label>
        </label>
        <label>Artist
          <input onChange={this.updateField('artist')} type='text' value={this.state.artist}/>
        </label>
        <label>Album
          <input onChange={this.updateField('album')} type='text' value={this.state.album}/>
        </label>
        <input type='submit' value='Save Track' />
      </form>
    );
  }
}

export default withRouter(TrackForm);
