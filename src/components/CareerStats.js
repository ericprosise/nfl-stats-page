import React from 'react';
import './styles/CareerStats.css';

function CareerStats() {
    return (
        <div className="careerStats">
            Career Stats:
            <div className="statLine">
                <strong>QB Record:</strong> 94-57-6
            </div>
            <div className="statLine">
                <strong>Passing Yards:</strong> 24,718
            </div>
            <div className="statLine">
                <strong>TD:</strong> 152
            </div>
        </div>
    )
}
export default CareerStats;