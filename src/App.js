import React, { useState } from 'react';
import Player from './components/Player'
import Song from './components/Song'
import './styles/app.scss'

import data from './utils'

function App() {

  const [songs, setSongs] = useState(data())
  const [currentSong, setSurrentSong] = useState(songs[0])

  return (
    <div className="app">
      <Song currentSong={currentSong}/>
      <Player />
    </div>
  );
}

export default App;
