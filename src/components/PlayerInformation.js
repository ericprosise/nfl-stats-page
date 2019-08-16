import React from 'react';
import './styles/PlayerInformation.css';

function PlayerInformation(props) {
    var college = props.playerInformation.college.trim().split(':')[1];
    var birthDate = props.playerInformation.birthDate.trim();

    return (
        <div className="playerInformation">
            <div className="playerName">{props.playerInformation.playerName}</div>
            <div className="informationLine">
                {props.playerInformation.position}
            </div>
            <div className="informationLine">
                College: {college}
            </div>
            <div className="informationLine">
                Height: {props.playerInformation.height}
            </div>
            <div className="informationLine">
                Weight: {props.playerInformation.weight}
            </div>
            <div className="informationLine">
                Born: {birthDate}
            </div>
            <div className="informationLine">
                Death: May 26, 2019
            </div>
        </div>
    )
}

export default PlayerInformation;