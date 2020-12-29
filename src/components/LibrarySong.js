import React from 'react'

function LibrarySong({ song, songs, setCurrentSong, audioRef, isPlaying, setSongs }) {
        
    const songSelectHandler = async () => {
        await setCurrentSong(song);

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
        if (isPlaying) audioRef.current.play();
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
