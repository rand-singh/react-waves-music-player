import React from 'react'
import { playAudio } from '../util'

function LibrarySong({ song, songs, setCurrentSong, audioRef, isPlaying, setSongs }) {
        
    const songSelectHandler = () => {
        setCurrentSong(song);

        // add active state
        const newSongs = songs.map(s => {
            if (s.id === song.id) {
                return {
                    ...s, 
                    active: true
                }
            } else {
                return {
                    ...s,
                    active: false
                }
            }
        })

        setSongs(newSongs);

        playAudio(isPlaying, audioRef);
    }

    return (
        <div className={`library__song-container ${song.active ? 'selected' : ''} `} onClick={songSelectHandler}>
            <div className="song">
                <img src={song.cover} alt={song.name} className="song--image"/>
                
                <div className="song--description">
                    <h3>{song.name}</h3>
                    <h4>{song.artist}</h4>
                </div>
            </div>
        </div>
    )
}

export default LibrarySong
