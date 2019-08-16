import React from 'react';
import './styles/PlayerInformation.css';

function PlayerInformation(props) {
    var college = props.playerInformation.college.trim().split(':')[1];
    var birthDate = props.playerInformation.birthDate.trim();

    return (
        <div className="playerInformation">
            <div className="playerName">{props.playerInformation.name}</div>
            <div className="informationLine">
                Full Name: {props.playerInformation.fullName}
            </div>
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
        </div>
    )
}

export default PlayerInformation;