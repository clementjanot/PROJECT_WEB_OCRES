import React from 'react';
import logo from './images/contactsIcon.jpg';
import './contacts.css';

import Intitule from './Intitule';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import {Input, InputGroup, Icon} from 'rsuite';

export default class todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nameWidget : "Contacts",
        }
    }

    render() {
        return (
            <div className = "col-md-12">

                <header className = "contacts-header">
                    <Container>
                        <Row>
                            <Intitule name={this.state.nameWidget}/>
                            <Col lg={3} md={3} sm={3}>
                                <p><br></br></p>
                                <img src={logo} className="App-logo" alt="logo" />
                            </Col>
                            <Col lg={9} md={9} sm={9}>
                                <p>
                                <b>Amandine ZIEGLER</b>
                                <br></br>amandineziegler@gmail.com
                                <br></br>0601071363
                                <br></br><br></br>
                                <b>Clément JANOT</b>
                                <br></br>clementjanot@gmail.com 
                                <br></br>0605040302
                                </p>
                        <div>
                            <h3>Ajout d'un contact : </h3>
                            <InputGroup inside>
                                <Input className="hello" placeholder={"Veuillez entrer le nom"} value={this.state.newTask} onChange={(val) => this.setState({newTask: val})}/>
                                <br></br><Input className="hello" placeholder={"Veuillez entrer le prénom"} value={this.state.newTask} onChange={(val) => this.setState({newTask: val})}/>
                                <br></br><Input className="hello" placeholder={"Veuillez entrer l'adresse mail"} value={this.state.newTask} onChange={(val) => this.setState({newTask: val})}/>
                                <br></br><Input className="hello" placeholder={"Veuillez entrer le numéro de téléphone"} value={this.state.newTask} onChange={(val) => this.setState({newTask: val})}/>
                            </InputGroup>
                        </div>

                        <div>
                            <h3>Supprimer un contact : </h3>
                            <InputGroup inside>
                                <Input placeholder={"Veuillez entrer le nom à supprimer"} value={this.state.newTask} onChange={(val) => this.setState({newTask: val})}/>
                            </InputGroup>
                        </div>
                            </Col>
                        </Row>
                    </Container>
                </header>
                
            </div>
        )
    }
}
