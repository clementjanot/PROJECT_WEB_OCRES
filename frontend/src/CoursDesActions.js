import React from 'react';
import './CoursDesActions.css';
import Intitule from './Intitule';
import Moment from 'moment';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
            <div className = "widget">
                <div className="teo">
                    <Intitule name={this.state.nameWidget}/>
                </div>
                <div>
                    <h4>{this.state.nom}</h4>
                    <h1>{this.state.recap}€</h1>
                    <p>{this.state.date}</p>
                </div>
                <Container>
  <Row className="cont1">
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row className="cont1">
    <Col lg={4} md={4} sm={4}>1 of 3</Col>
    <Col lg={4} md={4} sm={4}>2 of 3</Col>
    <Col lg={4} md={4} sm={4}>3 of 3</Col>
  </Row>
</Container>
                
            </div>
        )
    }
}
export default CoursDesActions;