import React from 'react';
import Intitule from './Intitule';
import Moment from 'moment';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Formulaire.css';

import {Input, InputGroup, Icon} from 'rsuite';

class CoursDesActions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameWidget : "Cours des Actions",
            nom : "Cours de l'action",
            recap :"116,03",
            date : Moment().format('LLL')
        };
    }

    render() {
        return (
            <div className = "formulaire">
                <Container>
                <h2>Remplissez le fromulaire d'entreprise</h2>
                <p>Ce formulaire a pour but de mieux vous connaitre à fin de réaliser un dashboard personalisé</p>
                
                <form method="" className="fff">
                    <Row>
                        <Col><label>Nom </label></Col>
                        <Col><input type="text" name="name" placeholder="Janot"/></Col>
                    
                    </Row>
                    <Row>
                        <Col><label>Prenom  </label></Col>
                        <Col><input type="text" name="Prenom" placeholder="Clément"/></Col>
                    
                    </Row>
                    <Row>
                        <Col><label>Email  </label></Col>
                        <Col><input type="email" name="mail" placeholder="cj@gmail.com"/></Col>
                    
                    </Row>
                    <Row>
                        <Col><label>Telephone  </label></Col>
                        <Col><input type="tel" name="phone" placeholder="0781150929"/></Col>
                    
                    </Row>
                    <Row>
                        <Col><label>Nom du compte  </label></Col>
                        <Col><input type="text" name="NameCompte" placeholder="Mr Janot"/></Col>
                    
                    </Row>
                    <Row>
                        <Col><label>Numero carte bancaire </label></Col>
                        <Col><input type="number" name="numCart" placeholder="1235 6759 678 6754"/></Col>
                    
                    </Row>
                    <Row>
                        <Col><label>Telephone  </label></Col>
                        <Col><input type="tel" name="phone" placeholder="0781150929"/></Col>
                    
                    </Row>
                    <Row>
                        <Col><label>Type de carte</label></Col>
                        <Col>
                            <select>
                                <option value="Visa">VISA</option>
                                <option value="Mastercard">MASTERCARD</option>
                               
                            </select>
                        </Col>
                    
                    </Row>
                     <Row>
                         <input type="submit" value="Submit"></input> 
                    </Row>
                </form>
                
                </Container>
            </div>
        )
    }
}
export default CoursDesActions;