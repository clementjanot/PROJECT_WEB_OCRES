import React from 'react';
import './todo.css';
import Intitule from './Intitule';

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
                        <Col className = "colonnes" lg={6} md={6} sm={6}>
                            <h3>Virement à effectuer : </h3>
                            <p>
                                09/12 : Loyer, 850€
                                <br></br>10/12 : SFR, 35€
                            </p>
                        </Col>

                        <Col className = "colonnes" lg={6} md={6} sm={6}>
                            <div>
                                <h3>Ajout de nouvelles tâches : </h3>
                                <InputGroup inside>
                                    <Input className="box" placeholder={"Nouvelle tâche"} value={this.state.newTask} onChange={(val) => this.setState({newTask: val})}/>
                                </InputGroup>
                            </div>
                        </Col>
                    </Row>
                </header>
            </div>
        )
    }
}
