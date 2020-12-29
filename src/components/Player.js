import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStepForward, faStepBackward, faPause } from '@fortawesome/free-solid-svg-icons'
import { playAudio } from '../util'

function Player({ audioRef, currentSong, isPlaying, setIsPlaying, setSongInfo, songInfo, songs, setCurrentSong, setSongs }) {

    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
        )
    }

    useEffect(() => {        
        const newSongs = songs.map(s => {
            if (s.id === currentSong.id) {
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
        });
        setSongs(newSongs);
    }, [currentSong])

    // Event handlers
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {            
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }

    const dragHandler = ({ target: { value } }) => {
        audioRef.current.currentTime = value;        
        setSongInfo({...songInfo, currentTime: value})
    }

    const skipTrackHandler = (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id)

        // use modulus to calculate next and prev track
        if (direction === 'skip-forward') {
            setCurrentSong(songs[(currentIndex + 1) % songs.length])            
        } else if (direction === 'skip-back') {
            // why minus one, because arrays begin with zero index
            if ((currentIndex - 1) % songs.length === -1) {
                setCurrentSong(songs[songs.length - 1])
                playAudio(isPlaying, audioRef);
                return;
            }
            setCurrentSong(songs[(currentIndex - 1) % songs.length])
        }   

        playAudio(isPlaying, audioRef);
    }

    return (
        <div className="playerContainer">
            <div className="playerControls__time">
                <p>{getTime(songInfo.currentTime)}</p>
                <input 
                    onChange={dragHandler} 
                    type="range" 
                    name="" 
                    id="" 
                    min={0} 
                    max={songInfo.duration || 0} 
                    value={songInfo.currentTime}
                />

                <p>{songInfo.duration ? getTime(songInfo?.duration) : "0:00"}</p>
            </div>

            <div className="playerControls__buttons">
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-back')} icon={faStepBackward} size="2x" className="playerControls__buttons--back"/>
                <FontAwesomeIcon onClick={playSongHandler} icon={isPlaying ? faPause : faPlay} size="2x" className="playerControls__buttons--play"/>
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-forward')} icon={faStepForward} size="2x" className="playerControls__buttons--forward"/>
            </div>           
        </div>
    )
}

export default Player
