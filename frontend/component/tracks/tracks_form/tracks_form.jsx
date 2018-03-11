import React from 'react';
import {withRouter} from 'react-router-dom';

class TrackForm extends React.Component{
  constructor(props){
    super(props);

    this.state = this.props.track;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateField(field){
    return( (e) => {
      this.setState({[field]: e.target.value});
    });
  }

  handleSubmit(e){

    e.preventDefault();
    this.props.action(this.state).then(
      data => this.props.history.push(`/tracks/${data.track.id}`)
    );
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={idx}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render(){

    return(
      <form className='track-form' onSubmit={this.handleSubmit}>
        {this.renderErrors()}
        <h1 className='track-form-header'>{this.props.formType}</h1>
        <h2 className='track-form-primary'>Primary Info</h2>
        <ul className='track-form-inputs'>
          <li>
            <label >Artist
              <div><input className='form-artist' onChange={this.updateField('artist')} type='text' value={this.state.artist}/></div>
            </label>
          </li>

          <li>
            <label >Title
              <div><input  className='form-title' onChange={this.updateField('title')} type='text' value={this.state.title}/></div>
            </label>
          </li>

          <li>
            <label className='form-genre-lable' >Genre
              <div className='genres'>
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
              </div>
            </label>
          </li>

          <li>
            <label >Lyrics
              <div><textarea className='form-lyrics' onChange={this.updateField('lyrics')} value={this.state.lyrics}/></div>
            </label>
          </li>

          <li>
            <label >Album
              <div><input className='form-album' onChange={this.updateField('album')} type='text' value={this.state.album}/></div>
            </label>
          </li>

        </ul>
        <input className='form-submit-button' type='submit' value='Submit' />
      </form>
    );
  }
}

export default withRouter(TrackForm);
