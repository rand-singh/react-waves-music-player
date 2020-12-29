import React from 'react'

function LibrarySong({ song }) {
    return (
        <div className="library__song-container">
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
