import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStepForward, faStepBackward, faPause } from '@fortawesome/free-solid-svg-icons'

function Player({ currentSong, isPlaying, setIsPlaying }) {
    // Ref
    const audioRef = useRef(null);

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

    return (
        <div className="playerContainer">
            <div className="playerControls__time">
                <p>Start Time</p>
                <input type="range" name="" id=""/>
                <p>End Time</p>
            </div>

            <div className="playerControls__buttons">
                <FontAwesomeIcon icon={faStepBackward} size="2x" className="playerControls__buttons--back"/>
                <FontAwesomeIcon onClick={playSongHandler} icon={isPlaying ? faPause : faPlay} size="2x" className="playerControls__buttons--play"/>
                <FontAwesomeIcon icon={faStepForward} size="2x" className="playerControls__buttons--forward"/>
            </div>

            <audio ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
}

export default Player
