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
        if (this.props.bene == null || this.props.bene < 2) {
            return (<p>Aucun RDV.</p>);
        }

        return (

                <header className = "contacts-header">
                    <Intitule name={this.state.nomWidget}/>                        
                    <Row>
                        <Col lg={6} md={6} sm={6}>
                            <ul>
                                {this.props.bene.map((info,index)=>(
                                    <li>
                                        <b>{info.nom} {info.prenom}</b>
                                        <p>Numéro de compte : {info.numCompte}<br></br>
                                        Bic : {info.bic} <br></br>
                                        Banque : {info.banque}</p>
                                        <Input className="Supr" type="submit" value="Supprimer"/> 
                                        <Input className="Vir"type="submit" value="Virement"/> 
                                        <br></br><br></br>
                                    </li>
                                ))}
            
                            </ul>
                        </Col>

                        <Col className = "colonne2" lg={6} md={6} sm={6}>
                                
                            <div>
                                <h3>Ajout de bénéficiaire : </h3>
                                <InputGroup inside>
                                    <Input className="box" placeholder={"Nom du bénéficaire"} value={this.state.newTask} onChange={(val) => this.setState({newTask: val})}/>
                                    <br></br><Input className="box" placeholder={"IBAN"} value={this.state.newTask} onChange={(val) => this.setState({newTask: val})}/>
                                </InputGroup>
                                <br></br><Input className="AjoutBouton" type="submit" value="Ajouter"/>
                            </div>
                        </Col>
                    </Row>
                </header>
           
        )
    }
}