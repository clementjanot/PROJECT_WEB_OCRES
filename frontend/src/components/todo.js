import React from 'react';
import './todo.css';
import Intitule from './Intitule';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {Input, InputGroup, Icon} from 'rsuite';

export default class todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nomWidget:"To do",
        }
    }

    render() {
        return (
            <div className = "col-md-12">
                
                <header className = "todo-header">
                    <Intitule name={this.state.nomWidget}/>
                    <Row>
                        <Col className = "todo-test" lg={6} md={6} sm={6}>
                            <h3>Vos tâches à faire : </h3>
                            <p>- maj des documents admin</p>
                            <p>- appeler le service informatique</p>
                            <p>- finir le bon de commande n°4320</p>
                        </Col>

                        <Col className = "todo-test" lg={6} md={6} sm={6}>
                            <div>
                                <h3>Ajout de nouvelles tâches : </h3>
                                <InputGroup inside>
                                    <Input className="hello" placeholder={"Veuillez entrer une nouvelle tâche"} value={this.state.newTask} onChange={(val) => this.setState({newTask: val})}/>
                                    <InputGroup.Button><Icon icon="plus" onClick={() => alert(this.state.newTask)}/></InputGroup.Button>
                                </InputGroup>
                            </div>

                            <div>
                                <h3>Suppression d'une tâche : </h3>
                                <InputGroup inside>
                                    <Input className="hello" placeholder={"Veuillez entrer la tâche à supprimer"} value={this.state.newTask} onChange={(val) => this.setState({newTask: val})}/>
                                    <InputGroup.Button><Icon icon="plus" onClick={() => alert(this.state.newTask)}/></InputGroup.Button>
                                </InputGroup>
                            </div>
                        </Col>
                    </Row>
                </header>
            </div>
        )
    }
}
