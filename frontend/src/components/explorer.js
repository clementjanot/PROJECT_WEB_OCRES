import React from 'react';
import './explorer.css';
import photo from './images/photoPerso.jpg';
import dashboard from './images/iconDashboard.png';
import task from './images/task.png';
import folder from './images/folder.png';
import wallet from './images/wallet.png';
import help from './images/help.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import {Input, InputGroup, Icon} from 'rsuite';

export default class meeting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className = "col-md-12">
                <header className = "explorer-header">
                    <Container>
                        <p><br></br></p>
                        <Row>
                            <img src={photo} className="App-photo" alt="logo" />
                        </Row>
                        <p><br></br><br></br></p>
                        <Row>
                            <img src={dashboard} className="App-ok" alt="logo" />
                        </Row>
                        <p><br></br></p>
                        <Row>
                            <img src={task} className="App-logo" alt="logo" />
                        </Row>
                        <p><br></br></p>
                        <Row>
                            <img src={folder} className="App-logo" alt="logo" />
                        </Row>
                        <p><br></br></p>
                        <Row>
                            <img src={wallet} className="App-logo" alt="logo" />
                        </Row>
                        <p><br></br></p>
                        <Row>
                            <img src={help} className="App-logo" alt="logo" />
                        </Row>
                        <p><br></br></p>
                    </Container>
                    
                </header>
            </div>
        )
    }
}