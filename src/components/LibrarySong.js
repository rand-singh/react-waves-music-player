import React from 'react'

function LibrarySong({ song, songs, setCurrentSong, audioRef, isPlaying }) {
        
    const songSelectHandler = () => {
        setCurrentSong(song);
        if (isPlaying) {
            const playPromise = audioRef.current.play();

            if (playPromise !== undefined) {
                playPromise.then((audio) => {
                    audioRef.current.play();
                })
            }
        }
    }

    return (
        <div className="library__song-container" onClick={songSelectHandler}>
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
