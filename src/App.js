import React, { useState, useRef } from 'react';
import Player from './components/Player'
import Song from './components/Song'
import Library from './components/Library'

import './styles/app.scss'

import data from './utils'

function App() {
  // Ref
  const audioRef = useRef(null);

  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  })

  const timeUpdateHandler = ({ target: {currentTime, duration} }) => {
    setSongInfo({
        currentTime: currentTime,
        duration: duration
    })
  }

  return (
    <div className="app">
      <Song currentSong={currentSong} />

      <Player 
        audioRef={audioRef} 
        currentSong={currentSong} 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        setSongInfo={setSongInfo}
        songInfo={songInfo}
      />

      <Library 
        audioRef={audioRef} 
        songs={songs} 
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
      />

      <audio 
        onTimeUpdate={timeUpdateHandler} 
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef} 
        src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
