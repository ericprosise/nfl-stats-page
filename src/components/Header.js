import React from 'react';
import './styles/Header.css';
import ImageContainer from './ImageContainer';
import PlayerInformation from './PlayerInformation';
import CareerStats from './CareerStats';
import Awards from './Awards';
class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <ImageContainer
                    src={this.props.playerInformation.imageSrc} />
                <PlayerInformation
                    playerInformation={this.props.playerInformation} />
                <CareerStats
                    careerPassingStats={this.props.careerPassingStats} />
                <Awards
                    HOF={true} />
            </div>
        )
    }
}

export default Header;