import store from '../store';
import React from 'react';
import axios from 'axios';

import Lyrics from '../components/Lyrics';
import {setLyrics, setLyricsAsync} from '../action-creators/lyrics'

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
  if (this.state.artistQuery && this.state.songQuery) {
    store.dispatch(setLyricsAsync(this.state.artistQuery, this.state.songQuery));
  }
}

  render() {

    return(
      <Lyrics
        setArtist={this.setArtist}
        artistQuery={this.state.artistQuery}
        setSong={this.setSong}
        songQuery={this.state.songQuery}
        handleSubmit={this.handleSubmit}
        text={this.state.lyrics.text}/>
    );
  }
}

export default LyricsContainer;