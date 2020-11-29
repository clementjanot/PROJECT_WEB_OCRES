import React from 'react';
import './bénéficiaires.css';
import Intitule from './Intitule';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {Input, InputGroup, Icon} from 'rsuite';

export default class todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nomWidget : "Bénéficiaires",
        }
    }

    render() {
        return (
            <div className = "col-md-12">

                <header className = "contacts-header">
                    <Intitule name={this.state.nomWidget}/>                        
                    <Row>
                        <Col lg={6} md={6} sm={6}>
                            <p>
                                <b>Amandine ZIEGLER</b>
                                <br></br>Numéro de compte : ****0102
                                <br></br>BIC : ABCDEFG1XX
                                <br></br>Nom et adresse de la banque : BNP BANK FR
                                <br></br>
                                <Input type="submit" value="Supprimer"/> 
                                <Input type="submit" value="Virement"/>
                                <br></br><br></br>                  
                                <b>Clément JANOT</b>
                                <br></br>Numéro de compte : ****0304 
                                <br></br>BIC : HIJKLM2XX
                                <br></br>Nom et adresse de la banque : HSBC BANK IT
                                <br></br><br></br>
                                <Input type="submit" value="Supprimer"/> 
                                <Input type="submit" value="Virement"/>    
                                <br></br><br></br>
                            </p>
                        </Col>

                        <Col className = "colonne2" lg={6} md={6} sm={6}>
                                
                            <div>
                                <h3>Ajout de bénéficiaire : </h3>
                                <InputGroup inside>
                                    <Input className="box" placeholder={"Nom du bénéficaire"} value={this.state.newTask} onChange={(val) => this.setState({newTask: val})}/>
                                    <br></br><Input className="box" placeholder={"IBAN"} value={this.state.newTask} onChange={(val) => this.setState({newTask: val})}/>
                                </InputGroup>
                                <br></br><Input type="submit" value="Ajouter"/>
                            </div>
                        </Col>
                    </Row>
                </header>
            </div>
        )
    }
}