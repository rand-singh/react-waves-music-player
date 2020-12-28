import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStepForward, faStepBackward, faPause } from '@fortawesome/free-solid-svg-icons'

function Player({ currentSong, isPlaying, setIsPlaying }) {
    const [songInfo, setSongInfo] = useState({
        currentTime: null,
        duration: null
    })

    // Ref
    const audioRef = useRef(null);

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

    const timeUpdateHandler = ({ target: {currentTime, duration} }) => {
        setSongInfo({
            currentTime: currentTime,
            duration: duration
        })
    }

    const dragHandler = ({ target: { value } }) => {
        audioRef.current.currentTime = value;        
        setSongInfo({...songInfo, currentTime: value})
    }

    return (
        <div className="playerContainer">
            <div className="playerControls__time">
                <p>{getTime(songInfo.currentTime)}</p>
                <input onChange={dragHandler} type="range" name="" id="" min={0} max={songInfo.duration} value={songInfo.currentTime}/>
                <p>{getTime(songInfo.duration)}</p>
            </div>

            <div className="playerControls__buttons">
                <FontAwesomeIcon icon={faStepBackward} size="2x" className="playerControls__buttons--back"/>
                <FontAwesomeIcon onClick={playSongHandler} icon={isPlaying ? faPause : faPlay} size="2x" className="playerControls__buttons--play"/>
                <FontAwesomeIcon icon={faStepForward} size="2x" className="playerControls__buttons--forward"/>
            </div>

            <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
}

export default Player
