import React from 'react'
import LibrarySong from './LibrarySong'

function Library({ songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus }) {
    return (
        <div className={`library ${libraryStatus ? 'library--active' : ''} `}>
            <h2>Library</h2>            
            <div className="library__songs">
                {songs.map(song => (
                    <LibrarySong 
                        song={song} 
                        songs={songs} 
                        setCurrentSong={setCurrentSong} 
                        key={song.id}
                        audioRef={audioRef}
                        isPlaying={isPlaying}
                        setSongs={setSongs}
                    />
                ))}
            </div>
        </div>
    )
}

export default Library
