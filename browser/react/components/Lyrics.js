import React from 'react';

const Lyrics = (props) => {

  console.log(props);
  const text = props.text;
  const setArtist = props.setArtist;
  const artistQuery = props.artistQuery;
  const setSong = props.setSong;
  const songQuery = props.songQuery;
  const handleSubmit = props.handleSubmit;


  const artistChange = event => {
    setArtist(event.target.value);
  };

  const songChange = event => {
    setSong(event.target.value);
  };

  return (
    
    <div id="lyrics">
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" value={artistQuery} placeholder="Artist" onChange={artistChange}/>
          <input type="text" value={songQuery} placeholder="Song" onChange={songChange}/>
        </div>
        <pre>{text || 'Search above!'}</pre>
        <button type="submit">Search for Lyrics</button>
      </form>
    </div>

  );
}

export default Lyrics;