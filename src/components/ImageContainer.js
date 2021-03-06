import React from 'react';
import './styles/ImageContainer.css';

function ImageContainer(props) {
    return (
        <div className="imageContainer">
            <img className="image" itemScope="image" src={props.src} alt="Bart Starr" />
        </div>
    )
}

export default ImageContainer;