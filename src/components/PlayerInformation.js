import React from 'react';
import './styles/PlayerInformation.css';

function PlayerInformation(props) {
    return (
        <div className="playerInformation">
            <div className="playerName">{props.playerName}</div>
            <div className="informationLine">
                Position: QB
            </div>
            <div className="informationLine">
                College: Alabama
            </div>
            <div className="informationLine">
                Born: January 9, 1934
            </div>
            <div className="informationLine">
                Death: May 26, 2019
            </div>
        </div>
    )
}

export default PlayerInformation;