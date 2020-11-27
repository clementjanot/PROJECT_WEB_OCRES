import React from 'react';
import logo from './Circle-icons-contacts.svg.jpg';
import './contacts.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import {Input, InputGroup, Icon} from 'rsuite';

export default class todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className = "col-md-12">
                <header className = "contacts-header">
                    <Container>
                        <Row>
                            <Col sm={3}>
                                <img src={logo} className="App-logo" alt="logo" />
                            </Col>
                            <Col sm={9}>
                                <h2>Contact</h2>
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
                                <Input placeholder={"Veuillez entrer le nom"} value={this.state.newTask} onChange={(val) => this.setState({newTask: val})}/>
                                <br></br><Input placeholder={"Veuillez entrer le prénom"} value={this.state.newTask} onChange={(val) => this.setState({newTask: val})}/>
                                <br></br><Input placeholder={"Veuillez entrer l'adresse mail"} value={this.state.newTask} onChange={(val) => this.setState({newTask: val})}/>
                                <br></br><Input placeholder={"Veuillez entrer le numéro de téléphone"} value={this.state.newTask} onChange={(val) => this.setState({newTask: val})}/>
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

                    {/*<div className = "col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div className = "col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                        <h2>Contact</h2>
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
                                <Input placeholder={"Veuillez entrer le nom"} value={this.state.newTask} onChange={(val) => this.setState({newTask: val})}/>
                                <br></br><Input placeholder={"Veuillez entrer le prénom"} value={this.state.newTask} onChange={(val) => this.setState({newTask: val})}/>
                                <br></br><Input placeholder={"Veuillez entrer l'adresse mail"} value={this.state.newTask} onChange={(val) => this.setState({newTask: val})}/>
                                <br></br><Input placeholder={"Veuillez entrer le numéro de téléphone"} value={this.state.newTask} onChange={(val) => this.setState({newTask: val})}/>
                                <br></br><InputGroup.Button><Icon icon="plus" onClick={() => alert(this.state.newTask)}/></InputGroup.Button>
                            </InputGroup>
                        </div>

                        <div>
                            <h3>Supprimer un contact : </h3>
                            <InputGroup inside>
                                <Input placeholder={"Veuillez entrer le nom à supprimer"} value={this.state.newTask} onChange={(val) => this.setState({newTask: val})}/>
                                <InputGroup.Button><Icon icon="plus" onClick={() => alert(this.state.newTask)}/></InputGroup.Button>
                            </InputGroup>
                        </div>
        </div>*/}
                    
                </header>
                
            </div>
        )
    }
}
