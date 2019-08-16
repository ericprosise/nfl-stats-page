import React from 'react';
import './styles/CareerStats.css';

function CareerStats(props) {
    console.log("Career Stats props", props);
    return (
        <div className="careerStats">
            Career Stats:
            <div className="statLine">
                <strong>QB Record: </strong> {props.careerPassingStats.qb_rec}
            </div>
            <div className="statLine">
                <strong>Passing Yards: </strong> {props.careerPassingStats.pass_yds}
            </div>
            <div className="statLine">
                <strong>TD: </strong> {props.careerPassingStats.pass_td}
            </div>
            <div className="statLine">
                <strong>INT: </strong> {props.careerPassingStats.pass_int}
            </div>
        </div>
    )
}
export default CareerStats;