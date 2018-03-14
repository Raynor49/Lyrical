import React from 'react';

class Lyrics extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  handleMouseUp(e) {
    if (window.getSelection().type !== "None" && window.getSelection().toString() !== ""){

      let selObj = window.getSelection();
      let selRange = selObj.getRangeAt(0);
      let startidx = selRange.startOffset + parseInt(this.props.offset);
      let endidx = selRange.endOffset + parseInt(this.props.offset);
      let text = selObj.toString();

      if(this.props.currentUser){
        this.props.history.push(`/tracks/${this.props.trackId}/annotations/new/${startidx}/${endidx}`);
      }else{
        this.props.openModal('signup');
      }
    }

  }


  render () {

    return(
      <p
        className='lyric-component'
        onMouseUp={this.handleMouseUp}
        value={this.props.text}
      >{this.props.text}</p>
    );
  }
}

export default Lyrics;
