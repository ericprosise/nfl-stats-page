import React from 'react';
import HOF from '../images/HOF.png';
import Packers_Logo from '../images/1280px-Green_Bay_Packers_logo.svg.png';
import Packers_Old_Logo from '../images/Packers_Old.png';
import Packers_Old_2_Logo from '../images/Packers_Old2.gif'
import './styles/Awards.css';

function Awards(props) {
    return (
        <div className="awards">
            <div style={{ flex: '1 1 auto' }}>
                <img className="awardsImage" src={Packers_Old_Logo} alt="PackersOld" />
            </div>
            <div style={{ flex: '1 1 auto' }}>
                <img className="awardsImage" src={Packers_Old_2_Logo} alt="PackersOld" />
            </div>
            <div style={{ flex: '1 1 auto' }}>
                <img className="awardsImage" src={Packers_Logo} alt="Packers" />
            </div>
            <div style={{ flex: '1 1 auto' }}>
                {props.HOF &&
                    <img className="awardsImage" src={HOF} alt="HOF" />}
            </div>
        </div>
    )
}

export default Awards;