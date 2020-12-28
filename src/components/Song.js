import React from 'react'

function Song({ currentSong }) {
    console.log("song comp", currentSong)
    return (
        <div className="songContainer">
            <img src={currentSong.cover} alt=""/>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    )
}

export default Song
