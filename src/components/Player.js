import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStepForward, faStepBackward } from '@fortawesome/free-solid-svg-icons'

function Player() {
    return (
        <div className="playerContainer">
            <div className="playerControls__time">
                <p>Start Time</p>
                <input type="range" name="" id=""/>
                <p>End Time</p>
            </div>

            <div className="playerControls__buttons">
                <FontAwesomeIcon icon={faStepBackward} size="2x" className="playerControls__buttons--back"/>
                <FontAwesomeIcon icon={faPlay} size="2x" className="playerControls__buttons--play"/>
                <FontAwesomeIcon icon={faStepForward} size="2x" className="playerControls__buttons--forward"/>
            </div>
        </div>
    )
}

export default Player
