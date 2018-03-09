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
      <form className='track-form' onSubmit={this.handleSubmit}>
        <h1 className='track-form-header'>Add Song</h1>
        <h2 className='track-form-primary'>Primary Info</h2>
        <ul className='track-form-inputs'>
          <li>
            <label >Artist
              <li><input className='form-artist' onChange={this.updateField('artist')} type='text' value={this.state.artist}/></li>
            </label>
          </li>

          <li>
            <label >Title
              <li><input  className='form-title' onChange={this.updateField('title')} type='text' value={this.state.title}/></li>
            </label>
          </li>

          <li>
            <label className='form-genre-lable' >Genre
              <li className='genres'>
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
                <label>R&B
                  <input name='track' onChange={this.updateField('genre')} type='radio' value="R&B"/>
                </label>
              </li>
            </label>
          </li>

          <li>
            <label >Lyrics
              <li><textarea className='form-lyrics' onChange={this.updateField('lyrics')} value={this.state.lyrics}/></li>
            </label>
          </li>

          <li>
            <label >Album
              <li><input className='form-album' onChange={this.updateField('album')} type='text' value={this.state.album}/></li>
            </label>
          </li>

        </ul>
        <input className='form-submit-button' type='submit' value='Submit' />
      </form>
    );
  }
}

export default withRouter(TrackForm);
