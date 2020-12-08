import React from 'react';
import './todo.css';
import Intitule from './Intitule';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import {Input, InputGroup, Icon} from 'rsuite';

export default class todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nomWidget:"To do",
        }
    }

    render() {
        if (this.props.liste == null || this.props.liste< 2) {
            return (<p>Aucune chose à faire</p>);
        }
        return (
           <Container className = "todo-header">
                <Intitule name={this.state.nomWidget}/>
                <Row>
                    <Col className = "colonnes" lg={6} md={6} sm={6}>
                        <h3>Virement à effectuer : </h3>
                        {this.props.liste.map((info,index)=>(
                                <p>{info.date} : {info.nomTache}, {info.prix} €
                                <br></br><Input className="Supr" type="submit" value="Supprimer"/>
                                </p>  
                        ))}
            
                            
                    </Col>

                    <Col className = "colonnes" lg={6} md={6} sm={6}>
                        <div>
                            <h3>Ajout de nouvelles tâches : </h3>
                            <InputGroup inside>
                                <Input className="box" placeholder={"Nouvelle tâche"} value={this.state.newTask} onChange={(val) => this.setState({newTask: val})}/>
                                <br></br><Input className="AjoutBouton" type="submit" value="Ajouter"/> 
                            </InputGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
           
        )
    }
}
