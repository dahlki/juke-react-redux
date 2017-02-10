import store from '../store';
import React from 'react';
import axios from 'axios';

import Lyrics from '../components/Lyrics';
import setLyrics from '../action-creators/lyrics'

class LyricsContainer extends React.Component {

  constructor() {
    super();
    this.state = store.getState();
    this.state.artistQuery = '';
    this.state.songQuery = '';  

    this.setArtist = this.setArtist.bind(this);
    this.setSong = this.setSong.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  setArtist(artistName) {
    this.setState({artistQuery: artistName});
  }

  setSong(songName) {
    this.setState({songQuery: songName});
  }

  handleSubmit() {
    axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
    .then(res => res.data)
    .then((lyrics) =>{
      console.log(lyrics.lyric);
      const action = setLyrics(lyrics.lyric);
      console.log(action);
      store.dispatch(action);
    });
  }

  render() {

    return(
      <Lyrics 
        setArtist={this.setArtist}
        setArtist={this.setArtist}
        artistQuery={this.state.artistQuery}
        setSong={this.setSong}
        songQuery={this.state.songQuery}
        handleSubmit={this.handleSubmit}
        text={this.state.text}/>
    );
  }
}

export default LyricsContainer;