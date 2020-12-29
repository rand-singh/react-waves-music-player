import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStepForward, faStepBackward, faPause } from '@fortawesome/free-solid-svg-icons'

function Player({ audioRef, currentSong, isPlaying, setIsPlaying, setSongInfo, songInfo }) {

    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
        )
    }

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

                <p>{getTime(songInfo.duration)}</p>
            </div>

            <div className="playerControls__buttons">
                <FontAwesomeIcon icon={faStepBackward} size="2x" className="playerControls__buttons--back"/>
                <FontAwesomeIcon onClick={playSongHandler} icon={isPlaying ? faPause : faPlay} size="2x" className="playerControls__buttons--play"/>
                <FontAwesomeIcon icon={faStepForward} size="2x" className="playerControls__buttons--forward"/>
            </div>           
        </div>
    )
}

export default Player
