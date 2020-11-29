import React from 'react';
import './explorer.css';
import Intitule from './Intitule';
import photo from './images/photoPerso.jpg';
import dashboard from './images/iconDashboard.png';
import fav from './images/iconFavoris.png';
import drive from './images/iconDrive.png';
import poubelle from './images/iconPoubelle.png';
import cloud from './images/iconCloud.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {Input, InputGroup, Icon} from 'rsuite';

export default class meeting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
                <header className = "explorer-header">
                    <Container>
                        <Row>
                        <img src={photo} className="App-photo" alt="logo" />
                    </Row>
                    <p><br></br><br></br></p>
                    <Row>
                        <img src={dashboard} className="App-ok" alt="logo" />
                    </Row>
                    <p><br></br></p>
                    <Row>
                        <img src={fav} className="App-logo" alt="logo" />
                    </Row>
                    <p><br></br></p>
                    <Row>
                        <img src={cloud} className="App-logo" alt="logo" />
                    </Row>
                    <p><br></br></p>
                    <Row>
                        <img src={drive} className="App-logo" alt="logo" />
                    </Row>
                    <p><br></br></p>
                    <Row>
                        <img src={poubelle} className="App-logo" alt="logo" />
                    </Row>
                    </Container>
                    
                </header>
        )
    }
}