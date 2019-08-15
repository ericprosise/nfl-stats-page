import React from 'react';
import './styles/Header.css';
import ImageContainer from './ImageContainer';
import PlayerInformation from './PlayerInformation';
import CareerStats from './CareerStats';
import Awards from './Awards';
class Header extends React.Component {
    render() {
        console.log('props', this.props);
        return (
            <div className="header">
                <ImageContainer
                    src={this.props.playerInformation.imageSrc} />
                <PlayerInformation
                    playerName={this.props.playerInformation.name} />
                <CareerStats />
                <Awards
                    HOF={true} />
            </div>
        )
    }
}

export default Header;